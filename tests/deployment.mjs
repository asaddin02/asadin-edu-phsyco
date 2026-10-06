import { chromium } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root=path.resolve('dist');
assert.deepEqual(fs.readdirSync(root).sort(),['404.html','_headers','assets','css','index.html','js','manifest.webmanifest','robots.txt']);
const mime={'.html':'text/html','.js':'application/javascript','.css':'text/css','.png':'image/png','.svg':'image/svg+xml','.webmanifest':'application/manifest+json'};
// A separate static host proves the export does not depend on the development server.
const server=http.createServer((req,res)=>{let url=new URL(req.url,'http://local').pathname;if(url.startsWith('/physics/'))url=url.slice(8);if(url.endsWith('/'))url+='index.html';const file=path.resolve(root,'.'+url);if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);res.end();return;}res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');fs.createReadStream(file).pipe(res);});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const report={date:new Date().toISOString(),cases:[],errors:[]};let browser;
try {
 browser=await chromium.launch({executablePath:process.env.CHROME_BIN||(fs.existsSync('/usr/bin/google-chrome')?'/usr/bin/google-chrome':undefined),args:['--no-sandbox']});
 const page=await browser.newPage();page.on('pageerror',e=>report.errors.push(e.message));page.on('response',r=>{if(r.status()>=400)report.errors.push(`${r.status()} ${r.url()}`);});
 for(const prefix of ['/','/physics/'])for(const route of ['#/','#/learn?level=educator','#/lesson/maxwell-course?level=university','#/simulations?sim=circuits']){
  await page.goto(`http://127.0.0.1:${server.address().port}${prefix}${route}`);await page.waitForSelector('#main-slot h1');assert.doesNotMatch(await page.locator('#main-slot').innerText(),/Halaman gagal|tidak ditemukan/);assert.ok(await page.locator('.brand-logo-img').evaluate(img=>img.complete&&img.naturalWidth>0));if(route.includes('circuits'))await page.waitForSelector('canvas');report.cases.push({prefix,route,status:'PASS'});
 }
 assert.deepEqual(report.errors,[]);console.log(`PASS ${report.cases.length} static hosting cases, including /physics/ subdirectory`);
} finally {await browser?.close();server.close();fs.mkdirSync('test-results',{recursive:true});fs.writeFileSync('test-results/deployment.json',JSON.stringify(report,null,2)+'\n');}
