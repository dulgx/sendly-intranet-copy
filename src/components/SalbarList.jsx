import React from "react";
import salbarList from "../json-files/salbar.json";

const salbars = salbarList;

function SalbarList() {
  return (
    <div>
      {salbars.map((company, index) => (
        <h1>{company.br_id >= 1010100 && company.br_name.slice(8)}</h1>
      ))}
    </div>
  );
}

export default SalbarList;
