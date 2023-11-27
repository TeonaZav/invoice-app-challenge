import { ButtonPanelCt } from "../styles/sharedStyles/StyledContainers";
import Button from "../styles/sharedStyles/ButtonStyles";

function ButtonPanel() {
  return (
    <ButtonPanelCt $ct={"form"}>
      <Button type="button" $btn="discard">
        Discard
      </Button>
      <Button type="button" $btn="draft">
        Save as Draft
      </Button>
      <Button type="submit" $btn="save">
        Save & Send
      </Button>
    </ButtonPanelCt>
  );
}
export default ButtonPanel;
