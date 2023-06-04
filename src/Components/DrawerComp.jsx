import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuTwoTone";
import { IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
const DrawerComp = ({links }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer
      PaperProps={{
       sx:{backgroundColor:' rgba(64,106,156,1)'}
        }}
      
       open={open} onClose={() => setOpen(false)}>
        <List>
            {
                links.map((link,index)=>(
                    <ListItemButton onClick={()=>setOpen(false)} key={index} divider>
                        <ListItemIcon>
                            <ListItemText sx={{color:'white'}}>
                                {link}
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                ))
            }
        </List>
        </Drawer>
      <IconButton sx={{marginLeft:'auto',color:'white'}} onClick={()=>setOpen(!open)}>
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
