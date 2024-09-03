import React from "react";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";

function App() {
  return (
    <div className="w-full h-screen">
      <div className="w-full py-2 flex justify-center bg-zinc-800">
        <h1 className="text-white">Library - Firebase CRUD</h1>
      </div>
      <AddBook/>
      <BooksList/>
    </div>
  );
}

export default App;
