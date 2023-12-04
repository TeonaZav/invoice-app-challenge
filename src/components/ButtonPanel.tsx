import { ButtonPanelCt } from "../styles/sharedStyles/StyledContainers";
import Button from "../styles/sharedStyles/ButtonStyles";
import { useFormContext } from "react-hook-form";
import { useSaveDraft } from "../hooks/useCreateDraft";
import { useEditDraft } from "../hooks/useEditDraft";
import { useInvoiceForm } from "../context/formContext";
import { FormValues } from "./invoice/form/Type";
import { useNavigate } from "react-router-dom";

interface ButtonPanelProps {
  resetValues: () => void;
}

function ButtonPanel({ resetValues }: ButtonPanelProps) {
  const navigate = useNavigate();
  const { saveDraft } = useSaveDraft();
  const {
    endFormEdit,
    state: { isEditSession },
  } = useInvoiceForm();

  const { getValues, reset } = useFormContext();
  const currentValues = getValues();
  const { editDraft } = useEditDraft(currentValues.id);

  interface Idata {
    id: string;
    changedDraft: FormValues;
  }
  function saveToDrafts() {
    const currentValues = getValues();

    if (currentValues.id) {
      const id = currentValues.id;
      editDraft({ changedDraft: { ...currentValues }, id } as Idata, {
        onSuccess: () => {
          resetValues();
          setTimeout(() => {
            navigate("/");
          }, 2000);
        },
      });
    } else {
      saveDraft(currentValues as FormValues, {
        onSuccess: () => {
          resetValues();
          setTimeout(() => {
            navigate("/");
          }, 2000);
        },
      });
    }
  }

  return (
    <ButtonPanelCt $ct={"form"}>
      <Button type="button" $btn="discard">
        Discard
      </Button>
      {currentValues.status === "draft" && (
        <Button type="button" $btn="draft" onClick={saveToDrafts}>
          {isEditSession ? "Changes draft" : "Save as Draft"}
        </Button>
      )}
      <Button type="submit" $btn="save">
        {isEditSession && currentValues.status !== "draft"
          ? "Save Changes"
          : "Save & Send"}
      </Button>
    </ButtonPanelCt>
  );
}
export default ButtonPanel;
