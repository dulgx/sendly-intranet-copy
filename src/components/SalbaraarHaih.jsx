import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CompanyData from "../json-files/salbar.json";

export default function Grouped() {
  const branches = CompanyData.companies
    .filter((company) => company.subsidiaries)
    .flatMap((company) => company.subsidiaries);

  const options = branches
    .map((option) => {
      const branchName = option.branch;
      if (/^\d+$/.test(branchName) || !/[а-яА-Я]/.test(branchName)) {
        return null;
      }
      const firstLetter = branchName[0].toUpperCase();
      return {
        firstLetter: firstLetter,
        ...option,
      };
    })
    .filter(Boolean);

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.branch}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Салбараар хайх" />}
    />
  );
}
