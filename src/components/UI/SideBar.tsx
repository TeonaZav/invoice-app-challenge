import { useCallback } from "react";
import { Box } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import InvoiceForm from "../invoice/form/InvoiceForm";
import { useMediaQuery } from "react-responsive";
import { useInvoiceForm } from "../../context/formContext";

export default function SideBar() {
  const {
    state: { drawerIsOpen },
    drawerToggle,
  } = useInvoiceForm();

  const toggleDrawer = useCallback(
    () => () => {
      drawerToggle();
    },
    [drawerToggle]
  );

  const isTablet = useMediaQuery({ query: "(min-width: 48em)" });
  const isDes = useMediaQuery({ query: "(min-width: 90em)" });
  const list = () => (
    <Box
      sx={{
        width: isDes ? 719 : isTablet ? 616 : "100vw",
        marginLeft: isDes ? "12rem" : 0,
        position: "relative",
      }}
      role="presentation"
    >
      <InvoiceForm />
    </Box>
  );

  return (
    <SwipeableDrawer
      open={drawerIsOpen}
      onOpen={toggleDrawer()}
      onClose={toggleDrawer()}
    >
      {list()}
    </SwipeableDrawer>
  );
}
