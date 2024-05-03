import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function SearchByBranch({ sBranch, gBranch }) {
  const names1 = sBranch.map((branch) => "Sendly" + branch.br_name.slice(8));
  const gnames = gBranch.map((branch) => branch.br_name.slice(8));

  const mixedBranch = sBranch.concat(gBranch);
  const names = mixedBranch.map((branch) => branch.br_name.slice(8));

  const options = names
    .map((option) => {
      const branchName = option;
      if (/^\d+$/.test(branchName) || !/[а-яА-Я]/.test(branchName)) {
        return null;
      }
      const firstLetter = branchName[0].toUpperCase();
      return {
        firstLetter: firstLetter,
        branch: option,
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
      filterOptions={(options, { inputValue }) => {
        return options.filter((option) =>
          option.branch.toLowerCase().startsWith(inputValue.toLowerCase())
        );
      }}
    />
  );
}
