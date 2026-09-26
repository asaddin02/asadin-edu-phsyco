import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const output=path.join(root,'dist');
await fs.rm(output,{recursive:true,force:true});
await fs.mkdir(output,{recursive:true});
for(const name of ['index.html','manifest.webmanifest','css','js','assets'])await fs.cp(path.join(root,name),path.join(output,name),{recursive:true});
console.log('Static deployment package: dist/ (public application files only)');
