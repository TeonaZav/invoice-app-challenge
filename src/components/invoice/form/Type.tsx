export type Item = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export type FormValues = {
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number | null;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: Item[];
  total: number;
};
