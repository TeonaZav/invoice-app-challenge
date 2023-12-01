import { useMoveBack } from "../hooks/useMoveBack";
import Button from "../styles/sharedStyles/ButtonStyles";
import IconLeft from "../assets/icon-arrow-left.svg";
function ButtonGoBack() {
  const moveBack = useMoveBack();
  return (
    <Button $btn="btnGoBack" onClick={moveBack}>
      <img src={IconLeft} alt="icon left" />
      Go back
    </Button>
  );
}

export default ButtonGoBack;
