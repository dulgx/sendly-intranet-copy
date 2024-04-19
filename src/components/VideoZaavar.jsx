import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

function VideoZaavar() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://192.168.90.91/apps/test_hr/intranet/test.php"
        );
        const data = await response.json();
        setFetchedData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const mainBranch = fetchedData.filter(
    (item) => item.br_id >= 1000 && item.br_id <= 2000
  );

  function handleClick() {
    const [passID, setPassID] = useState([1010100]);
    setPassID();
  }

  return (
    <div>
      <Box>
        <SimpleTreeView>
          {mainBranch.map((company, index) => (
            <TreeItem
              key={index}
              itemId={index}
              label={company.br_name.slice(5)}
              onClick={handleClick}
            />
          ))}
        </SimpleTreeView>
      </Box>
    </div>
  );
}

export default VideoZaavar;
