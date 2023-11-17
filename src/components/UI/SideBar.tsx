import { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";

export default function SideBar() {
  const [state, setState] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setState(open);
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <p>drawer</p>
    </Box>
  );

  return (
    <div>
      <>
        <Button onClick={toggleDrawer(true)}>{"left"}</Button>
        <SwipeableDrawer
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </>
    </div>
  );
}
