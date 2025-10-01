import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

/********************************* Save Image On Server Folder*****************************/
export async function uploadMediaOnServer(file: File, vuploadDir: string): Promise<string> {
  const publicDirPath = path.join(process.cwd(), 'public');
  const uploadDirPath = path.join(publicDirPath, vuploadDir);

  await fs.mkdir(uploadDirPath, { recursive: true }); // create parent directories if needed

  const fileExtension = path.extname(file.name); // e.g., .png, .jpg
  const uniqueFilename = `${uuidv4()}${fileExtension}`;
  const filePath = path.join(uploadDirPath, uniqueFilename);

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  await fs.writeFile(filePath, buffer); // write to server filesystem

  // Return URL path suitable for serving from Next.js public folder
  return `/${vuploadDir.replace(/\\/g, '/').replace(/\/$/, '')}/${uniqueFilename}`;
}
/********************************* End Save Image On Server *******************************/
