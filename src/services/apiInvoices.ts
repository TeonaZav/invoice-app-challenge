import {
  doc,
  addDoc,
  deleteDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { db } from "../config/firebase-config";
import { IInvoice } from "../interfacese/IInvoice";

export async function deleteInvoice(id: string) {
  const movieDoc = doc(db, "invoices", id);
  await deleteDoc(movieDoc);
  return movieDoc;
}
