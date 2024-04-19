import React, { useState, useEffect } from "react";
import Grouped from "./SalbaraarHaih";
import IntranetProfile from "./intranet-profile";
import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

function Intranet() {
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

  function handleClick(companyID) {
    const [passID, setPassID] = useState([1010100]);
    setPassID(companyID);
  }

  return (
    <>
      <section className="flex w-full overflow-hidden h-100">
        <div className="mt-5">
          <Box>
            <SimpleTreeView>
              {mainBranch.map((company, index) => (
                <TreeItem
                  key={index}
                  itemId={index}
                  label={company.br_name.slice(5)}
                  onClick={() => handleClick(company.br_id)}
                />
              ))}
            </SimpleTreeView>
          </Box>
        </div>

        <div>
          <div className="mt-5 flex w-full justify-evenly static">
            <form class="max-w-md w-72">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Хайх
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Нэр, утасаар хайх"
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
                >
                  Хайх
                </button>
              </div>
            </form>
            <Grouped />
          </div>
          <IntranetProfile />
        </div>
      </section>
    </>
  );
}

export default Intranet;
