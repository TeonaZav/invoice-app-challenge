import { ButtonPanelCt } from "../styles/Form";
import Button from "../styles/Button";

function ButtonPanel() {
  return (
    <ButtonPanelCt>
      <Button type="button" btn="discard">
        Discard
      </Button>
      <Button type="button" btn="draft">
        Save as Draft
      </Button>
      <Button type="submit" btn="save">
        Save & Send
      </Button>
    </ButtonPanelCt>
  );
}
export default ButtonPanel;
