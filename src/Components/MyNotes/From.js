import React, { useState, useRef,useContext } from "react";
import TextField from "@mui/material/TextField";
import { Box, styled } from "@mui/material";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { DataContext } from "../../Context/Provider";
import {v4 as uuid} from 'uuid';
const Container = styled(Box)({
  display: "flex",
  margin: "auto",
  flexDirection: "column",
  width: "600px",
  boxShadow:
    "0px 1px 2px 0px rgb(60 64 67/ 30%), 0px 2px 6px 2px rgb(60 64 67/ 15%)",
  padding: "10px 15px",
  borderRadius: "8px",
  borderColor: "#e0e0e0",
  minHeight: "20px",

  // alignItems: 'center',
});

const note={
    id:'',
    heading:'',
    text:''
}

const From = () => {
  const DynamicRef = useRef();
  const [textField, setTextField] = useState(false);
  const [addNote,setAddNote] = useState({...note,id:uuid()});
  const {setNotes}=useContext(DataContext);
  const textFieldClick = () => {
    setTextField(true);
    DynamicRef.current.style.minHeight = "80px";
  };
  const handleClickAway = () => {
    setTextField(false);
    DynamicRef.current.style.minHeight = "20px";
    setAddNote({...note,id:uuid()})

    if(addNote.heading || addNote.text){
        setNotes(prevArr=>[addNote,...prevArr]);
    }
   
  };

//   const onTextChange=(e) => {
//     // e.target.name, e.target.value
//     let newNote={...addNote,[e.target.name]: e.target.value}}
//     setAddNote(newNote);
//   }
const TextChange=(e)=>{
    let newNote = {...addNote,[e.target.name]: e.target.value}
    setAddNote(newNote);
}

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container ref={DynamicRef}>
        {textField && 
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: "15px" }}
            onChange={(e)=>TextChange(e)}
            name='heading'
            value={addNote.heading}
          />
        }
        <TextField
          placeholder="Make a note..."
          multiline={true}
          maxRows={Infinity}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onClick={textFieldClick}
          onChange={(e)=>TextChange(e)}
          name="text"
          value={addNote.text}
        />
      </Container>
    </ClickAwayListener>
  );
}

export default From;
