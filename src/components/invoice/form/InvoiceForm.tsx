import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useForm,
  FormProvider,
  useFieldArray,
  FieldErrors,
} from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useCreateInvoice } from "../../../hooks/useCreateInvoice";
import { useEditInvoice } from "../../../hooks/useEditInvoice";
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
  const navigate = useNavigate();
  const location = useLocation();
  const { createInv } = useCreateInvoice();
  const [subTotal, setSubTotal] = useState(0);
  const [due, setDue] = useState("");
  const {
    state: { default: formCurrentValues, isEditSession },
    closeDrawer,
    endFormEdit,
  } = useInvoiceForm();

  const { editInvoice } = useEditInvoice(formCurrentValues?.id);

  function handleDrawer() {
    closeDrawer();
  }

  useEffect(() => {
    console.log(isEditSession);
  }, [isEditSession]);

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
    getValues,
  } = methods;

  function resetValues() {
    if (isEditSession) {
      endFormEdit();
    }
    reset(defaultVAl);
    setValue("createdAt", "");
    setValue("paymentDue", "");
  }

  useEffect(() => {
    if (isEditSession && location.pathname === "/") {
      resetValues();
    }
  }, [location, isEditSession]);

  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });

  console.log(getValues());

  useEffect(() => {
    if (isEditSession && formCurrentValues) {
      reset(formCurrentValues);
    }
  }, [isEditSession, formCurrentValues, reset]);

  function onSubmit(data: FormValues) {
    if (isEditSession && formCurrentValues) {
      const id = formCurrentValues.id;
      editInvoice(
        { changedData: { ...data }, id },
        {
          onSuccess: () => {
            resetValues();
          },
        }
      );
    }

    if (!isEditSession) {
      setValue("status", "pending");
      createInv(data, {
        onSuccess: () => {
          resetValues();
          setTimeout(() => {
            closeDrawer();
            navigate("/");
          }, 2000);
        },
      });
    }
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
    <FormContainer>
      <DevTool control={control} />
      <FormHeader>
        {isEditSession ? (
          <H2 color="dark">
            Edit<span className="pale">#</span>
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
            <Input type="text" id="clientEmail" {...register("clientEmail")} />
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
          <ButtonPanel resetValues={resetValues} />
        </Form>
      </FormProvider>
    </FormContainer>
  );
}
export default InvoiceForm;
