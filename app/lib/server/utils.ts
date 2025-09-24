
//const fs = require('fs').promises; // not used es modules import because touched to node.js
//import { promises as fs } from 'fs';
//import path from 'path'; // not used es modules import because touched to node.js
//import {v4 as uuidv4} from 'uuid';
//import { put } from '@vercel/blob';


/********************************* Save Image On Server Folder*****************************/
/*export async function uploadMediaOnServer(file:File,vuploadDir:string){
    const publicDirPath = path.join(process.cwd(),'public');    
    const uploadDirPath = path.join(publicDirPath,vuploadDir);

    await fs.mkdir(uploadDirPath,{recursive: true}); // { recursive: true } will create parent directories if they don't exist
      
    const fileExtension = path.extname(file.name); // Get original extension (.png, .jpg)
    const uniqueFilename = `${uuidv4()}${fileExtension}`; // e.g., "a1b2c3d4-e5f6-...-someuuid.png"
    const filePath = path.join(uploadDirPath, uniqueFilename);
    
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    await fs.writeFile(filePath, buffer); // write the buffer(bytes) to server's file system
    
    return `/${vuploadDir}/${uniqueFilename}`; // e.g., "/public/images/home/nomenews/aabc132-...png" random file name
}*/
/********************************* End Save Image On Server ******************************/
/*export async function uploadMediaToVercel(media: File) {
  if (media && media.size > 0) {
  try {    
        const blob = await put(media.name, media, {
        access: 'public',
        addRandomSuffix: true,
        });
        return blob.url;
      }
      catch(error) {
        console.error('Blob Error:', error);
        throw new Error('Blob Image failed to upload on Vercel');
      } 
  }  
}*/

