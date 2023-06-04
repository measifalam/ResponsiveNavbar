import React, { useState } from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Typography, Grid, Tabs, Tab, Box, Button } from "@mui/material";

const DesktopMode = ({links}) => {
    const [value, setValue] = useState();
  return (
    <Grid sx={{ placeItems: "center" }} container>
      <Grid item xs={2}>
        <Typography>
          <ShoppingCartCheckoutIcon />
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Tabs
          indicatorColor="secondary"
          sx={{ textcolor: "white" }}
          value={value}
          onChange={(e, val) => setValue(val)}
        >
          {
            links?.map((link, index) => (
            <Tab key={index} label={link} />
          ))}
        </Tabs>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={3}>
        <Box display="flex">
          <Button
            sx={{ marginLeft: "auto", background: "rgba(238,174,202,1)" }}
            variant="contained"
          >
            Login
          </Button>
          <Button
            sx={{ marginLeft: 1, background: "rgba(238,174,202,1)" }}
            variant="contained"
          >
            Signup
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DesktopMode;
