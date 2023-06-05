import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from '../Assest/logo2.png';
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 75px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Image=styled('img')({
height:"54px",
marginTop:"3px",
marginLeft:"-45px"
})

const Heading= styled(Typography)({
  color:"#5f6368",
  fontSize:"24px",
  marginLeft:"-15px"
})

const HeaderBar = ({ open, handelDrawer }) => {
  
  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={handelDrawer}
          edge="start"
          sx={{
            marginRight: 5,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Image src={logo} alt="logo" />
        <Heading >
          My Notes
        </Heading>
      </Toolbar>
    </Header>
  );
};

export default HeaderBar;
