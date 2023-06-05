import React from 'react'

import { Box,Typography,styled} from "@mui/material";

const Text=styled(Typography)({
color:"#80868b",
fontSize:"30px",
textAlign:"center",marginTop:"15rem"
})

const DataNotes = () => {
  return (
    <Box>
      
        <Text>
            Notes will be appeared here...
        </Text>
    </Box>
  )
}

export default DataNotes
