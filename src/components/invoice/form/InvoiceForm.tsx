import { useContext, useEffect, useState } from "react";
import {
  useForm,
  FormProvider,
  useFieldArray,
  FieldErrors,
} from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useCreateInvoice } from "../../../hooks/useCreateInvoice";
import { useDeleteInvoice } from "../../../hooks/useDeleteInvoice";
import { UIContext } from "../../../context/uiContext";
import { H2, H3 } from "../../../styles/sharedStyles/Typography";
import IconClose from "../../../assets/icon-close.svg";
import {
  Form,
  FormContainer,
  DateDescriptionWrap,
  ItemsCt,
  FormHeader,
} from "../../../styles/formStyles/FormStyle";
import { FormValues } from "./Type";
import FormRow from "../../UI/FormRow";
import Input from "../../../styles/formStyles/InputStyle";
import AddressFields from "./AddressFields";
import DateInput from "./DateInput";
import SelectField from "./SelectField";
import Button from "../../../styles/sharedStyles/ButtonStyles";
import InvoiceItem from "./InvoiceItem";
import { paymentOptions } from "../../../DummyData";
import ButtonPanel from "../../ButtonPanel";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./Schema";

function InvoiceForm() {
  const { create } = useCreateInvoice();
  const { deleteInv } = useDeleteInvoice();
  const { toggleDrawer } = useContext(UIContext);
  const [subTotal, setSubTotal] = useState(0);
  const [due, setDue] = useState("");

  const methods = useForm<FormValues>({
    defaultValues: {
      createdAt: "",
      paymentDue: "",
      description: "",
      paymentTerms: null,
      clientName: "",
      clientEmail: "",
      status: "draft",
      senderAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
      },
      clientAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
      },
      items: [
        {
          id: "",
          name: "",
          quantity: 1,
          price: 0,
          total: 0,
        },
      ],
      total: 0,
    },
    mode: "onChange",
    resolver: yupResolver<FormValues>(validationSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
  } = methods;

  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });

  function onSubmit(data: FormValues) {
    console.log("submitting...");
    console.log(data);
    create(data);
  }

  function onError(errors: FieldErrors<FormValues>) {
    console.log(errors);
  }

  useEffect(() => {
    const subscription = watch((values) => {
      const invoiceDate = values.createdAt;
      const terms = values.paymentTerms;

      if (invoiceDate && terms) {
        const date = new Date(invoiceDate);
        date.setDate(date.getDate() + terms);
        console.log(invoiceDate, terms, date, due);
        setDue(date.toLocaleString());
      }
      const items = values.items;
      let total = 0;
      if (items && items?.length > 0) {
        for (const item of items) {
          if (item?.total) {
            total = total + item.total;
          }
        }
      }
      setSubTotal(total);
      return total;
    });
    setValue("total", subTotal);
    setValue("paymentDue", due);
    return () => subscription.unsubscribe();
  }, [watch, setValue, subTotal, due]);

  return (
    <>
      <FormContainer>
        <DevTool control={control} />
        <FormHeader>
          <H2 color="dark">New Invoice</H2>
          <img src={IconClose} onClick={toggleDrawer(false)} />
        </FormHeader>

        <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <H3 color="indigo">Bill From</H3>
            <AddressFields address={"senderAddress"} />
            <H3 color="indigo">Bill To</H3>
            <FormRow
              label="Client’s Name"
              error={errors?.clientName?.message?.toString()}
              $boxtype="primary"
            >
              <Input type="text" id="clientName" {...register("clientName")} />
            </FormRow>
            <FormRow
              label="Client’s Email"
              error={errors?.clientEmail?.message?.toString()}
              $boxtype="primary"
            >
              <Input
                type="text"
                id="clientEmail"
                {...register("clientEmail")}
              />
            </FormRow>
            <AddressFields address={"clientAddress"} />

            <DateDescriptionWrap>
              <DateInput />
              <FormRow
                label="Payment Terms"
                error={errors?.paymentTerms?.message?.toString()}
                $boxtype="secondary"
              >
                <SelectField
                  options={paymentOptions}
                  fieldName={"paymentTerms"}
                />
              </FormRow>

              <FormRow
                label="Project Description"
                error={errors?.description?.message?.toString()}
                $boxtype="primary"
              >
                <Input
                  type="text"
                  id="description"
                  {...register("description")}
                />
              </FormRow>
            </DateDescriptionWrap>
            <H3 color="grey">Item List</H3>
            <ItemsCt>
              {fields.map((field, index) => {
                return (
                  <InvoiceItem
                    key={field.id}
                    remove={remove}
                    fieldId={field.id}
                    index={index}
                  />
                );
              })}
              <Button
                type="button"
                $btn="newproduct"
                onClick={() =>
                  append({
                    id: "",
                    name: "",
                    quantity: 1,
                    price: 0,
                    total: 0,
                  })
                }
              >
                + Add New Item
              </Button>
            </ItemsCt>
            <p>{subTotal}</p>
            <ButtonPanel />
          </Form>
        </FormProvider>
      </FormContainer>
    </>
  );
}
export default InvoiceForm;
