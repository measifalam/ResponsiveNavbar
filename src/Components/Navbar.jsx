import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {useTheme} from "@mui/material";
import DrawerComp from "./DrawerComp";
import React from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import DesktopMode from "./DesktopMode";

const Navbar = ({ links }) => {
  const theme = useTheme();
  console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  console.log(isMatch)
  
  console.log(theme)
  console.log(links);
  return (
    <AppBar sx={{backgroundImage: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(64,106,156,1) 100%);"}}>
      <Toolbar>
      {isMatch?<>
      <Typography>
        <ShoppingCartCheckoutIcon/>
      </Typography>
        <DrawerComp links={links}/>
      </>:
      <DesktopMode></DesktopMode>}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
