import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { H2, H3 } from "../../styles/Typography";
import {
  Form,
  FormContainer,
  AddressContainer,
  DateDescriptionWrap,
  ItemCt,
  ItemsCt,
} from "../../styles/Form";
import FormRow from "../UI/FormRow";
import Input from "../../styles/Input";
import Select from "react-select";
import SelectStyle from "../../styles/Select";
import IconDelete from "../../assets/icon-delete.svg";
import DatePicker from "react-datepicker";
import { DatePickerStyles } from "../../styles/DatePickerStyles";
import "react-datepicker/dist/react-datepicker.css";

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
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [startDate, setStartDate] = useState(undefined);
  const itemId = `${new Date().valueOf()}`;

  console.log(itemId);

  const paymentOptions = [
    { value: 1, label: "Net 1 Day" },
    { value: 7, label: "Net 7 Days" },
    { value: 14, label: "Net 14 Days" },
    { value: 30, label: "Net 30 Days" },
  ];

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
      items: [{ id: itemId, name: "", quantity: 0, price: 0, total: 0 }],
      // total: 0,
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState,
    setValue,
    control,
  } = form;

  const { errors } = formState;

  const { fields, append } = useFieldArray({
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
    console.log(getValues());
    console.log(errors);
    console.log(register);
  }

  return (
    <FormContainer>
      <DevTool control={control} />
      <H2 color="dark">New Invoice</H2>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <H3 color="indigo">Bill From</H3>

        <FormRow
          label="Street Address"
          error={errors?.senderAddress?.street?.message}
          boxtype="primary"
        >
          <Input
            type="text"
            id="street"
            {...register("senderAddress.street", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <AddressContainer>
          <FormRow
            label="City"
            error={errors?.senderAddress?.city?.message}
            boxtype="tertiary"
          >
            <Input
              type="text"
              id="city"
              {...register("senderAddress.city", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow
            label="Post Code"
            error={errors?.senderAddress?.postCode?.message}
            boxtype="tertiary"
          >
            <Input
              type="text"
              id="postCode"
              {...register("senderAddress.postCode", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow
            label="Country"
            error={errors?.senderAddress?.country?.message}
            boxtype="tertiary"
          >
            <Input
              type="text"
              id="country"
              {...register("senderAddress.country", {
                required: "This field is required",
              })}
            />
          </FormRow>
        </AddressContainer>
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
        <FormRow
          label="Street Address"
          error={errors?.clientAddress?.street?.message}
          boxtype="primary"
        >
          <Input
            type="text"
            id="street"
            {...register("clientAddress.street", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <AddressContainer>
          <FormRow
            label="City"
            error={errors?.clientAddress?.city?.message}
            boxtype="tertiary"
          >
            <Input
              type="text"
              id="city"
              {...register("clientAddress.city", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow
            label="Post Code"
            error={errors?.clientAddress?.postCode?.message}
            boxtype="tertiary"
          >
            <Input
              type="text"
              id="postCode"
              {...register("clientAddress.postCode", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow
            label="Country"
            error={errors?.clientAddress?.country?.message}
            boxtype="tertiary"
          >
            <Input
              type="text"
              id="country"
              {...register("clientAddress.country", {
                required: "This field is required",
              })}
            />
          </FormRow>
        </AddressContainer>
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
              <ItemCt id={field.id} key={field.id}>
                <FormRow label="Item Name" boxtype="tertiary">
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
                    min={0}
                    id={`items.${index}.quantity`}
                    {...register(`items.${index}.quantity`, {
                      required: "Quantity is required",
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
                    })}
                  />
                </FormRow>
                ;
              </ItemCt>
            );
          })}
          <button
            type="button"
            onClick={() =>
              append({
                id: `${new Date().valueOf()}`,
                name: "",
                quantity: 0,
                price: 0,
                total: 0,
              })
            }
          >
            + Add New Item
          </button>
          ;
        </ItemsCt>

        <button type="submit">Create new Invoice</button>
      </Form>
    </FormContainer>
  );
}
export default InvoiceForm;
