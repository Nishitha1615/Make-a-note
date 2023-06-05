import React from 'react'
import SideDrawer from './SideDrawer'
import {Box, styled } from "@mui/material";
import Note from './MyNotes/Note'
const Home = () => {
  return (
    <Box style={{display:'flex',width:'100%'}}>
    <SideDrawer/>
    <Note/>
    </Box>
  )
}

export default Home
