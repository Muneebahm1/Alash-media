// src/lib/utils/fileHandler.ts
import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid'; // For generating unique filenames

// You might need to install 'uuid': npm install uuid @types/uuid

const UPLOAD_DIR_NAME = 'uploads/news_images'; // Relative to the public directory

/**
 * Saves a File object to the server's public directory.
 * @param file The File object received from FormData.
 * @returns The public URL path where the image is accessible.
 */
export async function saveImageToStorage(file: File): Promise<string> {
  // 1. Determine the absolute path to the public upload directory
  // process.cwd() gets the current working directory (project root)
  const publicDirPath = path.join(process.cwd(), 'public');
  const uploadDirPath = path.join(publicDirPath, UPLOAD_DIR_NAME);

  // 2. Ensure the upload directory exists
  // { recursive: true } will create parent directories if they don't exist
  await fs.mkdir(uploadDirPath, { recursive: true });

  // 3. Generate a unique filename
  const fileExtension = path.extname(file.name); // Get original extension (.png, .jpg)
  const uniqueFilename = `${uuidv4()}${fileExtension}`; // e.g., "a1b2c3d4-e5f6-...-someuuid.png"
  const filePath = path.join(uploadDirPath, uniqueFilename);

  // 4. Convert the File object to a Buffer
  // Server Actions allow direct handling of File objects like this
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // 5. Write the buffer to the file system
  await fs.writeFile(filePath, buffer);

  // 6. Return the public URL path
  // This path is relative to the 'public' directory, so it's accessible directly via URL
  return `/${UPLOAD_DIR_NAME}/${uniqueFilename}`; // e.g., "/uploads/news_images/a1b2c3d4-...png"
}