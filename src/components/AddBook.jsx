import { Button, ButtonGroup, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import BookDataService from "../services/book.services";
import Alert from "./Alert";

function AddBook({ id, setBookId }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Available");
  const [flag, setflag] = useState(false);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async () => {
    const newBook = {
      title,
      author,
      status,
    };

    try {
      if (title === "" || author === "") {
        setMessage({ error: true, msg: "All fields are mandatory" });
        return;
      }
      if (id !== undefined && id !== "") {
        await BookDataService.updateBook(id, newBook);
        setBookId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await BookDataService.addBooks(newBook);
        setMessage({ error: false, msg: "New Book added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: "Some error occured" });
    }
    setTitle("");
    setAuthor("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await BookDataService.getBook(id);
      const bookData = docSnap.data(); // Get the actual data
      setTitle(bookData.title);
      setAuthor(bookData.author);
      setStatus(bookData.status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log(id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  return (
    <div className="w-full py-5 flex justify-center">
      {message.msg !== "" && (
        <Alert message={message} setMessage={setMessage} />
      )}
      <div className="w-1/3 flex flex-col gap-3">
        <TextField
          id="outlined-basic"
          label="Book Title"
          variant="standard"
          className="w-full"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <TextField
          id="outlined-basic"
          label="Book Author"
          variant="standard"
          className="w-full"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <div className="mt-3">
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button
              sx={{ backgroundColor: "green" }}
              disabled={!flag}
              onClick={(e) => {
                setflag(false);
                setStatus("Available");
              }}
            >
              Available
            </Button>
            <Button
              sx={{ backgroundColor: "red" }}
              disabled={flag}
              onClick={(e) => {
                setflag(true);
                setStatus("Not Available");
              }}
            >
              Not Available
            </Button>
          </ButtonGroup>
        </div>
        <div className="mt-3">
          <Button variant="contained" className="w-full" onClick={handleSubmit}>
            Add/Update
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
