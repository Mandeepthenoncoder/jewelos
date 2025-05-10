import { 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject,
  list,
  StorageReference
} from 'firebase/storage';
import { storage } from './config';

/**
 * Upload a file to Firebase Storage
 * @param file The file to upload
 * @param path The storage path to save the file
 * @returns The download URL for the uploaded file
 */
export async function uploadFile(file: File, path: string): Promise<string> {
  const storageRef = ref(storage, path);
  
  // Upload file
  const snapshot = await uploadBytes(storageRef, file);
  
  // Get download URL
  const downloadURL = await getDownloadURL(snapshot.ref);
  
  return downloadURL;
}

/**
 * Upload an organization logo
 * @param file The logo file
 * @param orgId The organization ID
 * @returns The download URL for the uploaded logo
 */
export async function uploadOrgLogo(file: File, orgId: string): Promise<string> {
  // Create path for organization logo
  const path = `orgs/${orgId}/logo/${file.name}`;
  
  return uploadFile(file, path);
}

/**
 * Delete a file from Firebase Storage
 * @param path The storage path of the file to delete
 */
export async function deleteFile(path: string): Promise<void> {
  const storageRef = ref(storage, path);
  await deleteObject(storageRef);
}

/**
 * List files in a directory
 * @param path The storage path to list files from
 * @returns Array of StorageReference objects
 */
export async function listFiles(path: string): Promise<StorageReference[]> {
  const storageRef = ref(storage, path);
  const result = await list(storageRef);
  return result.items;
}

/**
 * Get download URL for a file
 * @param path The storage path of the file
 * @returns The download URL
 */
export async function getFileURL(path: string): Promise<string> {
  const storageRef = ref(storage, path);
  return getDownloadURL(storageRef);
} 