import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import BookDataService from "../services/book.services";
import Alert from "./Alert";

function BooksList({getBookId}) {
  const [books, setBooks] = useState([]);
  const [message,setMessage]=useState({error:false,msg:""})
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const data = await BookDataService.getAllBooks();
    console.log(data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler=async (id)=>{
    await BookDataService.deleteBook(id);
    getBooks();
    setMessage({error:true,msg:"Book Deleted Successfully"})
  }

  return (
    <div className="w-full">
      {/* <pre>{JSON.stringify(books,undefined,2)}</pre> */}
      {message.msg !== "" && (
        <Alert message={message} setMessage={setMessage} />
      )}
      <div className="w-full flex justify-center">
        <Button variant="contained" sx={{ backgroundColor: "black" }} onClick={(e)=>getBooks()}>
          Refresh List
        </Button> 
      </div>
      <div className="w-full flex justify-center mt-3 py-3">
        <table class="border-collapse  border border-slate-800">
          <thead>
            <tr className="border-b-2 border-black">
              <th class=" min-w-[3vw] text-center py-2">#</th>
              <th class="border border-slate-800 min-w-[15vw] text-center py-2">
                Book Title
              </th>
              <th class="border border-slate-800 min-w-[15vw] text-center py-2">
                Book Author
              </th>
              <th class="border border-slate-800 min-w-[15vw] text-center py-2">
                Status
              </th>
              <th class="border border-slate-800 min-w-[25vw] text-center py-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((doc, index) => {
              return (
                <tr key={doc.id}>
                  <td className="text-center border border-slate-800 py-2">
                    {index + 1}
                  </td>
                  <td className="text-center border border-slate-800 py-2">
                    {doc.title}
                  </td>
                  <td className="text-center border border-slate-800 py-2">
                    {doc.author}
                  </td>
                  <td className="text-center border border-slate-800 py-2">
                    {doc.status}
                  </td>
                  <td className="text-center border border-slate-800 py-2 flex justify-center gap-3">
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "gray" }}
                      onClick={(e) => getBookId(doc.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "red" }}
                      onClick={(e) => deleteHandler(doc.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BooksList;
