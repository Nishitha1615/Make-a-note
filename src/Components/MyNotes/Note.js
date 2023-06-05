import React from "react";
import { useContext } from "react";
import From from "./From";
import { Box, styled ,Grid} from "@mui/material";
import NoteCard from "../NoteCard";
import { DataContext } from "../../Context/Provider";
import DataNotes from "../DataNotes";
const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Note = () => {

    const {notes} =useContext(DataContext);
  return (
    <Box sx={{ display: "flex",margin:'auto' }}>
      <Box sx={{ p: 3, width: "100%;" }}>
        <DrawerHeader />
        <From />
        {
            notes.length > 0 ?
        
        <Grid container style={{marginTop:"18px"}}>
        {
            notes.map(map=>(
                <Grid items>
                <NoteCard map={map} />
                </Grid>
            ))
        }
        </Grid> : <DataNotes/>
        }
      </Box>
    </Box>
  );
};

export default Note;
