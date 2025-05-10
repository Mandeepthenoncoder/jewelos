import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  addDoc,
  serverTimestamp,
  Timestamp,
  DocumentData,
  DocumentReference,
  CollectionReference
} from 'firebase/firestore';
import { db } from './config';

// Type for common field timestamps
interface TimestampFields {
  createdAt?: Timestamp;
  updatedAt: Timestamp;
}

// Create a new document with automatic timestamps
export async function createDocument<T extends DocumentData>(
  collectionPath: string,
  data: T,
  id?: string
): Promise<string> {
  const collectionRef = collection(db, collectionPath);
  const docData = {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  if (id) {
    const docRef = doc(collectionRef, id);
    await setDoc(docRef, docData);
    return docRef.id;
  } else {
    const docRef = await addDoc(collectionRef, docData);
    return docRef.id;
  }
}

// Update an existing document
export async function updateDocument<T extends DocumentData>(
  collectionPath: string,
  id: string,
  data: Partial<T>
): Promise<void> {
  const docRef = doc(db, collectionPath, id);
  const updateData = {
    ...data,
    updatedAt: serverTimestamp(),
  };
  await updateDoc(docRef, updateData);
}

// Get a document by ID
export async function getDocument<T>(
  collectionPath: string,
  id: string
): Promise<T | null> {
  const docRef = doc(db, collectionPath, id);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data() as T;
  } else {
    return null;
  }
}

// Get all documents from a collection
export async function getCollection<T>(
  collectionPath: string,
  queryConstraints?: any[]
): Promise<T[]> {
  let q = collection(db, collectionPath);
  
  if (queryConstraints && queryConstraints.length > 0) {
    q = query(q, ...queryConstraints) as any;
  }
  
  const querySnapshot = await getDocs(q);
  const documents: T[] = [];
  
  querySnapshot.forEach((doc) => {
    documents.push({ id: doc.id, ...doc.data() } as T);
  });
  
  return documents;
}

// Delete a document
export async function deleteDocument(
  collectionPath: string,
  id: string
): Promise<void> {
  const docRef = doc(db, collectionPath, id);
  await deleteDoc(docRef);
}

// Generate a path for an organization's collection
export function getOrgCollectionPath(
  orgId: string,
  collectionName: string
): string {
  return `orgs/${orgId}/${collectionName}`;
}

// Helper for where clauses
export { where, orderBy, limit, Timestamp };

// Export types for convenience
export type { DocumentReference, CollectionReference }; 