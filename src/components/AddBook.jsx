import { Button, ButtonGroup, TextField } from "@mui/material";
import React, { useState } from "react";

function AddBook() {

  const [flag, setflag] = useState(true)
  return (
    <div className="w-full py-5 flex justify-center">
      <div className="w-1/3 flex flex-col gap-3">
        <TextField
          id="outlined-basic"
          label="Book Title"
          variant="standard"
          className="w-full"
        />
        <TextField
          id="outlined-basic"
          label="Book Author"
          variant="standard"
          className="w-full"
        />
        <div className="mt-3">
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button sx={{backgroundColor:"green"}} disabled={!flag} onClick={(e)=>{
              setflag(false)
            }}>Available</Button>
            <Button sx={{backgroundColor:"red"}} disabled={flag} onClick={(e)=>{
              setflag(true)
            }}>Not Available</Button>
          </ButtonGroup>
        </div>
        <div className="mt-3">
        <Button variant="contained" className="w-full">Add/Update</Button>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
