import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import List from "@mui/material/List";
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const NavList = () => {

    const Mylist=[
        {id:1,name:"Notes", icon:<LightbulbOutlinedIcon/>},
        {id:2,name:"Archive", icon:<ArchiveOutlinedIcon/>},
        {id:3,name:"Trash", icon:<DeleteOutlineOutlinedIcon/>}

    ]
  return (
    <List>
      {Mylist.map(list => (
        <ListItem button key={list.id}>        
            <ListItemIcon>
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
