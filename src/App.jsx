import React, { useState } from "react";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";

function App() {
  const [bookId,setBookId]=useState("")

  const getBookIdHandler=(id)=>{
    setBookId(id)
  }
  return (
    <div className="w-full h-screen">
      <div className="w-full py-2 flex justify-center bg-zinc-800">
        <h1 className="text-white">Library - Firebase CRUD</h1>
      </div>
      <AddBook id={bookId} setBookId={setBookId}/>
      <BooksList getBookId={getBookIdHandler}/>
    </div>
  );
}

export default App;
