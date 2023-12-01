import { useEffect, useState } from "react";
import {
  useForm,
  FormProvider,
  useFieldArray,
  FieldErrors,
} from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useCreateInvoice } from "../../../hooks/useCreateInvoice";
import { useEditInvoice } from "../../../hooks/useEditInvoice";
// import { useDeleteInvoice } from "../../../hooks/useDeleteInvoice";
import { useInvoiceForm } from "../../../context/formContext";
import { H2, H3 } from "../../../styles/sharedStyles/Typography";
import IconClose from "../../../assets/icon-close.svg";
import {
  Form,
  FormContainer,
  DateDescriptionWrap,
  ItemsCt,
  FormHeader,
} from "../../../styles/formStyles/FormStyle";
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
import { FormValues } from "./Type";
import { defaultVAl } from "./defaultValues";

function InvoiceForm() {
  const { createInv } = useCreateInvoice();
  // const { deleteInv } = useDeleteInvoice();
  const [subTotal, setSubTotal] = useState(0);
  const [due, setDue] = useState("");
  const {
    state: { default: formCurrentValues, isEditSession },
    closeDrawer,
  } = useInvoiceForm();

  const { editInvoice } = useEditInvoice(formCurrentValues?.id);

  function handleDrawer() {
    closeDrawer();
  }

  const methods = useForm<FormValues>({
    defaultValues: defaultVAl,
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
    reset,
  } = methods;

  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });

  useEffect(() => {
    if (isEditSession && formCurrentValues) {
      reset(formCurrentValues);
    }
  }, [isEditSession, formCurrentValues, reset]);

  function onSubmit(data: FormValues) {
    console.log(data);
    if (isEditSession && formCurrentValues) {
      const id = formCurrentValues.id;
      editInvoice(
        { changedData: { ...data }, id },
        {
          onSuccess: () => {
            reset();
          },
        }
      );
    }

    if (!isEditSession) createInv(data);
    console.log("submiting...");
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
          {isEditSession ? (
            <H2 color="dark">
              <span className="pale">#</span>
              {formCurrentValues?.id}
            </H2>
          ) : (
            <H2 color="dark">New Invoice</H2>
          )}
          <img src={IconClose} onClick={handleDrawer} />
        </FormHeader>

        <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <H3 color="indigo">Bill From</H3>
            <AddressFields
              address={"senderAddress"}
              edit={isEditSession}
              editValue={formCurrentValues?.senderAddress}
            />
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
            <AddressFields
              address={"clientAddress"}
              edit={isEditSession}
              editValue={formCurrentValues?.clientAddress}
            />

            <DateDescriptionWrap>
              <DateInput
                edit={isEditSession || false}
                date={formCurrentValues?.createdAt}
              />
              <FormRow
                label="Payment Terms"
                error={errors?.paymentTerms?.message?.toString()}
                $boxtype="secondary"
              >
                <SelectField
                  options={paymentOptions}
                  fieldName={"paymentTerms"}
                  edit={isEditSession}
                  editValue={formCurrentValues?.paymentTerms}
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
