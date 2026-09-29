import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const output=path.join(root,'dist');
// SITE_URL=https://example.org adds absolute link-preview and canonical URLs for that address.
const siteURL=(process.env.SITE_URL||'').replace(/\/+$/,'');
if(siteURL&&!/^https:\/\/[^/]+(\/[^?#]*)?$/.test(siteURL))throw new Error(`SITE_URL must look like https://example.org, got "${siteURL}"`);
await fs.rm(output,{recursive:true,force:true});
await fs.mkdir(output,{recursive:true});
for(const name of ['index.html','manifest.webmanifest','css','js','assets'])await fs.cp(path.join(root,name),path.join(output,name),{recursive:true});
if(siteURL){
  const file=path.join(output,'index.html');
  const html=await fs.readFile(file,'utf8');
  const anchor='<meta property="og:type" content="website">';
  if(!html.includes(anchor))throw new Error('index.html Open Graph tags changed; update scripts/build.mjs');
  await fs.writeFile(file,html.replace(anchor,`${anchor}\n  <meta property="og:url" content="${siteURL}/">\n  <meta property="og:image" content="${siteURL}/assets/brand/icon-512.png">\n  <link rel="canonical" href="${siteURL}/">`));
}
// Cloudflare Pages and Netlify read _headers; the policy matches server/server.mjs.
await fs.writeFile(path.join(output,'_headers'),`/*
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'
  X-Content-Type-Options: nosniff
  Referrer-Policy: no-referrer
  X-Frame-Options: DENY
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
  Strict-Transport-Security: max-age=31536000
`);
await fs.writeFile(path.join(output,'robots.txt'),'User-agent: *\nAllow: /\n');
console.log(`Static deployment package: dist/ (public application files only)${siteURL?`, link previews for ${siteURL}`:''}`);
