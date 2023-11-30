import {
  doc,
  addDoc,
  deleteDoc,
  getDoc,
  getDocs,
  collection,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase-config";

import { FormValues } from "../components/invoice/form/Type";

const invoiceCollectionRef = collection(db, "invoices");

export async function getInvoices() {
  const data = await getDocs(invoiceCollectionRef);
  return data;
}

export async function getInvoice(id: string) {
  const movieRef = doc(db, "invoices", id);
  const data = await getDoc(movieRef);
  return data;
}

export async function createInvoice(newInvoice: FormValues) {
  await addDoc(invoiceCollectionRef, newInvoice);
}

export async function updateInvoice(changedInvoice: FormValues, id: string) {
  console.log(changedInvoice);
  const invoiceDoc = doc(db, "invoices", id);
  await updateDoc(invoiceDoc, { ...changedInvoice });
  return invoiceDoc;
}

export async function createDraft(draftData: FormValues) {
  await addDoc(invoiceCollectionRef, draftData);
}

export async function deleteInvoice(id: string) {
  const invoiceDoc = doc(db, "invoices", id);
  await deleteDoc(invoiceDoc);
  return invoiceDoc;
}
