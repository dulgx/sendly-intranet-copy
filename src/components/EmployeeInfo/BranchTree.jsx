import React, { useMemo } from "react";
import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

const BranchTree = ({ fetchedData, handleClick }) => {
  const mainBranch = useMemo(() => {
    return fetchedData.filter(
      (item) => item.br_id >= 1000 && item.br_id <= 2000
    );
  }, [fetchedData]);

  const sendlyBranch = useMemo(() => {
    return fetchedData.filter(
      (item) => item.br_id >= 1011000 && item.br_id <= 1091276
    );
  }, [fetchedData]);
  const gyalsBranch = useMemo(() => {
    return fetchedData.filter(
      (item) => item.br_id >= 1010100 && item.br_id <= 1010283
    );
  }, [fetchedData]);
  return (
    <div className=" mt-12 h-full overflow-y-auto sticky top-28 pb-10">
      <Box>
        <SimpleTreeView>
          {mainBranch.map((company, index) => (
            <TreeItem
              key={index}
              itemId={company.br_name}
              label={company.br_name.slice(5)}
              onClick={() => handleClick(company.br_id)}
            >
              {company.br_id === "1011" &&
                sendlyBranch.map((branch, index) => (
                  <TreeItem
                    key={index}
                    itemId={branch.br_id}
                    label={branch.br_name.slice(8)}
                    onClick={() => handleClick(branch.br_id)}
                  />
                ))}
              {company.br_id === "1010" &&
                gyalsBranch.map((branch, index) => (
                  <TreeItem
                    key={index}
                    itemId={branch.br_id}
                    label={branch.br_name.slice(8)}
                    onClick={() => handleClick(branch.br_id)}
                  ></TreeItem>
                ))}
            </TreeItem>
          ))}
        </SimpleTreeView>
      </Box>
    </div>
  );
};

export default BranchTree;
