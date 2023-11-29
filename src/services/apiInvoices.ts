import {
  doc,
  addDoc,
  deleteDoc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { db } from "../config/firebase-config";

import { FormValues } from "../components/invoice/form/Type";

const invoiceCollectionRef = collection(db, "invoices");

export async function getInvoices() {
  const data = await getDocs(invoiceCollectionRef);
  return data;
}

export async function createOrEditInvoice(
  newInvoice: FormValues,
  id: string = ""
) {
  if (!id) await addDoc(invoiceCollectionRef, newInvoice);
}

export async function deleteInvoice(id: string) {
  const movieDoc = doc(db, "invoices", id);
  await deleteDoc(movieDoc);
  return movieDoc;
}
export async function getInvoice(id: string) {
  const movieRef = doc(db, "invoices", id);
  const data = await getDoc(movieRef);
  return data;
}
