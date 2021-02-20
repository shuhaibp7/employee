import React from "react";
export default function Datatable({ data }) {
  console.log(data);
  
  return (
    <table cellPadding={20} cellSpacing={20}>
      <thead>
        
      </thead>
      <tbody>
        {data && data.map((row) => (
          <tr>
            <td>{row.name}</td>
            <td>{row.age}</td>
            <td>{row.place}</td>
            <td>{row.phone}</td>
            <td>{row.email}</td>




          </tr>
        ))}
      </tbody>
    </table>
  );
}
