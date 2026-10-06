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
// Search engines: GOOGLE_SITE_VERIFICATION (the content of Search Console's meta tag, or the whole tag) proves ownership,
// the sitemap needs SITE_URL, and 404.html makes unknown paths answer 404 instead of the app on Cloudflare Pages.
const verificationInput=(process.env.GOOGLE_SITE_VERIFICATION||'').trim();
const verification=verificationInput.match(/content="([^"]*)"/)?.[1]??verificationInput;
if(verificationInput&&!/^[\w-]{20,100}$/.test(verification))throw new Error('GOOGLE_SITE_VERIFICATION must be the content of the google-site-verification meta tag');
if(verification){
  const file=path.join(output,'index.html');
  const html=await fs.readFile(file,'utf8');
  await fs.writeFile(file,html.replace('</head>',`  <meta name="google-site-verification" content="${verification}">\n</head>`));
}
const basePath=siteURL?new URL(siteURL).pathname.replace(/\/?$/,'/'):'/';
if(siteURL)await fs.writeFile(path.join(output,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${siteURL}/</loc><lastmod>${new Date().toISOString().slice(0,10)}</lastmod></url>\n</urlset>\n`);
await fs.writeFile(path.join(output,'404.html'),`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex">
  <title>Halaman tidak ditemukan · Phsyco</title>
  <link rel="icon" type="image/png" sizes="48x48" href="${basePath}assets/brand/favicon-48.png">
  <style>
    body{margin:0;min-height:100vh;display:grid;place-items:center;padding:16px;font:16px/1.5 system-ui,sans-serif;color:#2a1714;background:#fffdf9;text-align:center}
    a{color:#bd382c;font-weight:600}
  </style>
</head>
<body>
  <main>
    <h1>Halaman tidak ditemukan</h1>
    <p>Alamat ini tidak ada di Phsyco.</p>
    <p><a href="${basePath}">Kembali ke beranda Phsyco</a></p>
  </main>
</body>
</html>
`);
// Cloudflare Pages and Netlify read _headers; the policy matches server/server.mjs.
await fs.writeFile(path.join(output,'_headers'),`/*
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'
  X-Content-Type-Options: nosniff
  Referrer-Policy: no-referrer
  X-Frame-Options: DENY
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
  Strict-Transport-Security: max-age=31536000
`);
await fs.writeFile(path.join(output,'robots.txt'),`User-agent: *\nAllow: /\n${siteURL?`\nSitemap: ${siteURL}/sitemap.xml\n`:''}`);
console.log(`Static deployment package: dist/ (public application files only)${siteURL?`, link previews for ${siteURL}`:''}`);
