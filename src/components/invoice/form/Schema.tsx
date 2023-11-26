import * as yup from "yup";

export const validationSchema = yup.object().shape({
  createdAt: yup.string().required("Invoice date is required"),
  paymentDue: yup.string().required("Required"),
  description: yup.string().required("Description is required"),
  paymentTerms: yup.number().required("Term is required"),
  clientName: yup.string().required("Name is required"),
  clientEmail: yup.string().email("Invalid email format!").required("Required"),
  status: yup.string().required("Required"),
  senderAddress: yup.object().shape({
    street: yup.string().required("Street is required"),
    city: yup.string().required("City is required"),
    postCode: yup.string().required("PostCode is required"),
    country: yup.string().required("Country is required"),
  }),
  clientAddress: yup.object().shape({
    street: yup.string().required("Street is required"),
    city: yup.string().required("City is required"),
    postCode: yup.string().required("PostCode is required"),
    country: yup.string().required("Country is required"),
  }),
  items: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.string().required("Required"),
        name: yup.string().required("Product name is required"),
        quantity: yup
          .number()
          .typeError("empty")
          .required("Required")
          .min(1, "< 1"),
        price: yup
          .number()
          .typeError("empty")
          .required("Required")
          .min(1, "< 1"),
        total: yup.number().required("Required"),
      })
    )
    .required("Required"),
  total: yup.number().required("Required"),
});
