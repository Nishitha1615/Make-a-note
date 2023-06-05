import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useContext } from "react";
import { DataContext } from "../Context/Provider";
const StyledCard = styled(Card)({
  width: "250px",
  margin: "10px",
  boxShadow: "none",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
});

const NoteCard = ({ map }) => {
  const { notes, setNotes, setArchiveNotes, setDeletedNotes } =
    useContext(DataContext);

  const archiveNote = (map) => {
    const Update = notes.filter((data) => data.id !== map.id);
    setNotes(Update);
    setArchiveNotes((prevArr) => [map, ...prevArr]);
  };

  const deleteeNote = (map) => {
    const Update = notes.filter((data) => data.id !== map.id);
    setNotes(Update);
    setDeletedNotes((prevArr) => [map, ...prevArr]);
  };
  return (
    <StyledCard>
      <CardContent>
        <Typography>{map.heading}</Typography>
        <Typography>{map.text}</Typography>
      </CardContent>
      <CardActions>
        <ArchiveOutlinedIcon
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => archiveNote(map)}
        />
        <DeleteOutlineOutlinedIcon
          fontSize="small"
          onClick={() => deleteeNote(map)}
        />
      </CardActions>
    </StyledCard>
  );
};

export default NoteCard;
