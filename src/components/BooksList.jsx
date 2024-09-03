import { Button } from "@mui/material";
import React from "react";

function BooksList() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <Button variant="contained" sx={{ backgroundColor: "black" }}>
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
            <tr>
              <td className="text-center border border-slate-800 py-2">1</td>
              <td className="text-center border border-slate-800 py-2">
                Node JS
              </td>
              <td className="text-center border border-slate-800 py-2">
                Vedant Chaudhary
              </td>
              <td className="text-center border border-slate-800 py-2">
                Available
              </td>
              <td className="text-center border border-slate-800 py-2 flex justify-center gap-3">
                <Button variant="contained" sx={{ backgroundColor: "gray" }}>
                  Edit
                </Button>
                <Button variant="contained" sx={{ backgroundColor: "red" }}>
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BooksList;
