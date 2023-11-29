export interface IAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}
interface IItems {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface IInvoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: IAddress;
  clientAddress: IAddress;
  items: IItems[];
  total: number;
}
