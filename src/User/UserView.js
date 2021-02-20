import React, { useState, useEffect } from "react";
import Datatable from "../datatable";
require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function App() {
  const [data, setData] = useState([]);  // [2,3,3] 
  const [q, setQ] = useState("");
  
  useEffect(() => {
    fetch("https://602b5a2fef26b40017f1423a.mockapi.io/users")
    .then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        setData(resp);
      });
    });
  }, []);

//   function search(rows){
//     return rows.filter(row => row.name.toLowerCase().indexOf(q) > -1);
//   }

  return (
    <div>
      <div>
        <input type="text" placeholder={"search"} value={q} onChange={(e) => setQ(e.target.value)}/>   <i class="fas fa-search"/>
      </div>
      <div>
        <Datatable data={data} />
      </div>
    </div>
  );
}