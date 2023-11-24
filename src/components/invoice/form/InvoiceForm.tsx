import { useState, useEffect } from "react";
import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useCreateInvoice } from "../../../hooks/useCreateInvoice";
import { useDeleteInvoice } from "../../../hooks/useDeleteInvoice";
import { H2, H3, P } from "../../../styles/Typography";
import {
  Form,
  FormContainer,
  AddressContainer,
  DateDescriptionWrap,
  ItemCt,
  ItemsCt,
  BtnDelete,
} from "../../../styles/Form";
import FormRow from "../../UI/FormRow";
import Input from "../../../styles/Input";
import Select from "react-select";
import SelectStyle from "../../../styles/Select";
import IconDelete from "../../../assets/icon-delete.svg";
import DatePicker from "react-datepicker";
import { DatePickerStyles } from "../../../styles/DatePickerStyles";
import "react-datepicker/dist/react-datepicker.css";
import AddressFields from "./AddressFields";

type Item = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  total: number;
};

type FormValues = {
  createdAt: Date;
  // paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  // status: string;
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
  // total: number;
};

function InvoiceForm() {
  const { create } = useCreateInvoice();
  const { deleteInv } = useDeleteInvoice();
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [startDate, setStartDate] = useState(undefined);
  const itemId = `${new Date().valueOf()}`;

  const paymentOptions = [
    { value: 1, label: "Net 1 Day" },
    { value: 7, label: "Net 7 Days" },
    { value: 14, label: "Net 14 Days" },
    { value: 30, label: "Net 30 Days" },
  ];

  function testDelete() {
    deleteInv("");
  }
  const form = useForm<FormValues>({
    defaultValues: {
      createdAt: startDate,
      // paymentDue: "",
      description: "",
      paymentTerms: 0,
      clientName: "",
      clientEmail: "",
      // status: "",
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
      // total: 0,
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
    setValue,
    control,
    watch,
  } = form;

  useEffect(() => {
    const subscription = watch((value) => {
      console.log(value);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });

  function onSubmit(data: FormValues) {
    console.log(data);
  }
  function handleDateChange(date) {
    setValue("createdAt", date.toISOString());
    setStartDate(date);
  }

  function handleChangePayment(payment) {
    setSelectedPayment(payment);
    setValue("paymentTerms", payment.value);
  }

  function onError(errors) {
    console.log(errors);
  }

  function getTotal(payload: FormValues["items"]) {
    let total = 0;
    for (const item of payload) {
      total = total + item.total;
    }

    console.log(total);
    return total;
  }

  function SubTotal({ control }: { control: Control<FormValues> }) {
    const itemsValue = useWatch({
      control,
      name: "items",
    });
    console.log(itemsValue);
    return <p>{getTotal(itemsValue)}</p>;
  }

  return (
    <FormContainer>
      <DevTool control={control} />
      <H2 color="dark">New Invoice</H2>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <H3 color="indigo">Bill From</H3>
        <AddressFields
          errors={errors}
          register={register}
          address={"senderAddress"}
        />
        <H3 color="indigo">Bill To</H3>
        <FormRow
          label="Client’s Name"
          error={errors?.clientName?.message}
          boxtype="primary"
        >
          <Input
            type="text"
            id="clientName"
            {...register("clientName", {
              required: "This field is required",
              validate: (fieldValue) => {
                return fieldValue !== "teona" || "Enter different name";
              },
            })}
          />
        </FormRow>
        <FormRow
          label="Client’s Email"
          error={errors?.clientEmail?.message}
          boxtype="primary"
        >
          <Input
            type="text"
            id="clientEmail"
            {...register("clientEmail", {
              required: "This field is required",
              pattern: {
                value:
                  /(?!^[.+&'_-]*@.*$)(^[_\w\d+&'-]+(\.[_\w\d+&'-]*)*@[\w\d-]+(\.[\w\d-]+)*\.(([\d]{1,3})|([\w]{2,}))$)/,
                message: "Invalid email format!",
              },
            })}
          />
        </FormRow>
        <AddressFields
          errors={errors}
          register={register}
          address={"clientAddress"}
        />

        <DateDescriptionWrap>
          <FormRow
            label="Invoice Date"
            error={errors?.createdAt?.message}
            boxtype="secondary"
          >
            <DatePickerStyles boxtype="secondary">
              <DatePicker
                id="createdAt"
                {...register("createdAt", {
                  required: "Invoice date is required",
                })}
                minDate={new Date()}
                placeholderText="d MMM yyyy"
                autoComplete="off"
                selected={startDate}
                onChange={(date) => handleDateChange(date)}
                calendarClassName="rasta-stripes"
                dateFormat="d MMM yyyy"
                monthsShown={1}
                isClearable
                // shouldCloseOnSelect
                // closeOnScroll={true}
              ></DatePicker>
            </DatePickerStyles>
          </FormRow>

          <FormRow
            label="Payment Terms"
            error={errors?.paymentTerms?.message}
            boxtype="secondary"
          >
            <SelectStyle className="react-select">
              <Select
                id="paymentTerms"
                {...register("paymentTerms", {
                  required: "This field is required",
                })}
                value={selectedPayment}
                onChange={handleChangePayment}
                options={paymentOptions}
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </SelectStyle>
          </FormRow>
          <FormRow
            label="Project Description"
            error={errors?.description?.message}
            boxtype="primary"
          >
            <Input
              type="text"
              id="description"
              {...register("description", {
                required: "This field is required",
              })}
            />
          </FormRow>
        </DateDescriptionWrap>
        <H3 color="grey">Item List</H3>
        <ItemsCt>
          {fields.map((field, index) => {
            return (
              <ItemCt key={field.id} id={field.id}>
                <FormRow label="id" boxtype="xs">
                  <Input
                    type="text"
                    id={`items.${index}.id`}
                    value={field.id}
                    {...register(`items.${index}.id`)}
                  />
                </FormRow>
                <FormRow label="Item Name" boxtype="primary">
                  <Input
                    type="text"
                    id={`items.${index}.name`}
                    {...register(`items.${index}.name`, {
                      required: "Item name is required",
                    })}
                  />
                </FormRow>
                <FormRow label="Qty." boxtype="xs">
                  <Input
                    type="number"
                    min={1}
                    id={`items.${index}.quantity`}
                    {...register(`items.${index}.quantity`, {
                      required: "Quantity is required",
                      valueAsNumber: true,
                    })}
                  />
                </FormRow>
                <FormRow label="Price" boxtype="sm">
                  <Input
                    type="number"
                    min={0}
                    id={`items.${index}.price`}
                    {...register(`items.${index}.price`, {
                      required: "Price is required",
                      valueAsNumber: true,
                    })}
                  />
                </FormRow>
                <FormRow label="Total" boxtype="sm">
                  <Input
                    type="number"
                    min={0}
                    id={`items.${index}.total`}
                    value={
                      watch(`items.${index}.price`) *
                      watch(`items.${index}.quantity`)
                    }
                    {...register(`items.${index}.total`, {
                      valueAsNumber: true,
                      setValueAs: (v) => v,
                    })}
                  />
                </FormRow>
                {/* <Total control={control} id={field.id} /> */}

                {index > 0 && (
                  <BtnDelete onClick={() => remove(index)}>
                    <img src={IconDelete} alt="" />
                  </BtnDelete>
                )}
              </ItemCt>
            );
          })}
          <button
            type="button"
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
          </button>
        </ItemsCt>
        <SubTotal control={control} />
        <button type="submit">Create new Invoice</button>
      </Form>

      <button onClick={testDelete}>Test Delete</button>
    </FormContainer>
  );
}
export default InvoiceForm;
