import { useDarkTheme } from "../../context/themeContext";
import Icons from "./Icons";

import Button from "../../styles/sharedStyles/ButtonStyles";

function BtnToggleTheme() {
  const { isDarkMode, toggleTheme } = useDarkTheme();

  return (
    <Button $btn="btnTheme" onClick={() => toggleTheme()}>
      <Icons iconName={isDarkMode ? "sun" : "moon"} />
    </Button>
  );
}
export default BtnToggleTheme;
