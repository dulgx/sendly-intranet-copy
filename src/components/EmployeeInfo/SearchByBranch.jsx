import React, { useMemo } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function SearchByBranch({ branches }) {
  const sendlyBranch = useMemo(() => {
    return branches
      .filter((item) => item.br_id >= 1011000 && item.br_id <= 1091276)
      .map((item) => ({
        ...item,
        main_branch: "Сэндли",
      }));
  }, [branches]);

  const gyalsBranch = useMemo(() => {
    return branches
      .filter((item) => item.br_id >= 1010100 && item.br_id <= 1010283)
      .map((item) => ({
        ...item,
        main_branch: "Гялс төгрөг",
      }));
  }, [branches]);

  const branchBoth = useMemo(() => {
    return sendlyBranch.concat(gyalsBranch);
  }, [sendlyBranch, gyalsBranch]);

  console.log(branchBoth);

  const options = branchBoth.map((option) => {
    const firstLetter = option.br_name.slice(8).charAt(0).toUpperCase();
    return {
      firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) =>
        option.br_name.slice(8) + "-" + option.main_branch
      }
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="With categories" />
      )}
    />
  );
}
