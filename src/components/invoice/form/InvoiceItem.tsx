import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { ItemCt, BtnDelete } from "../../../styles/Form";
import IconDelete from "../../../assets/icon-delete.svg";
import IconOval from "../../../assets/oval-green.svg";
import FormRow from "../../UI/FormRow";
import Input from "../../../styles/Input";

interface IInvoiceItemProps {
  fieldId: string;
  index: number;
  remove: (index?: number | number[]) => void;
}

function InvoiceItem({ fieldId, index, remove }: IInvoiceItemProps) {
  const [total, setTotal] = useState(0);

  const { register, watch, setValue } = useFormContext();

  useEffect(() => {
    setValue(`items.${index}.id`, fieldId);
  }, [setValue, fieldId, index]);

  useEffect(() => {
    const subscription = watch((values) => {
      console.log(values);
      const price = values.items[index].price;
      const quantity = values.items[index].quantity;
      if (price && quantity) setTotal(price * quantity);
    });
    setValue(`items.${index}.total`, total, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
    return () => subscription.unsubscribe();
  }, [watch, index, setValue, total]);

  return (
    <ItemCt id={fieldId}>
      <FormRow
        label="Item Name"
        boxtype="productname"
        invoiceItem={index > 0 && true}
      >
        <Input
          type="text"
          id={`items.${index}.name`}
          {...register(`items.${index}.name`, {
            required: "Item name is required",
          })}
        />
      </FormRow>
      <FormRow label="Qty." boxtype="xs" invoiceItem={index > 0 && true}>
        <Input
          type="number"
          min={1}
          id={`items.${index}.quantity`}
          {...register(`items.${index}.quantity`, {
            required: "Required",
            valueAsNumber: true,
            validate: (val) => {
              if (val && val < 1) {
                return "< 1";
              }
              return true;
            },
          })}
        />
      </FormRow>
      <FormRow label="Price USD" boxtype="sm" invoiceItem={index > 0 && true}>
        <Input
          type="number"
          min={1}
          id={`items.${index}.price`}
          {...register(`items.${index}.price`, {
            required: "Required",
            valueAsNumber: true,
          })}
        />
      </FormRow>
      <FormRow label="Total USD" boxtype="sm" invoiceItem={index > 0 && true}>
        <Input
          type="currency"
          min={0}
          id={`items.${index}.total`}
          {...register(`items.${index}.total`, {
            valueAsNumber: true,
          })}
          value={total}
          styletype="calculated"
        />
      </FormRow>

      <Input
        type="text"
        id={`items.${index}.id`}
        value={fieldId}
        {...register(`items.${index}.id`)}
        className="displayNone"
      />
      {index > 0 ? (
        <BtnDelete onClick={() => remove(index)}>
          <img src={IconDelete} alt="" />
        </BtnDelete>
      ) : (
        <img src={IconOval} alt="" />
      )}
    </ItemCt>
  );
}

export default InvoiceItem;
