import React, { useState } from "react";
import CompanyData from "../json-files/salbar.json";
import Grouped from "./SalbaraarHaih";
import IntranetProfile from "./intranet-profile";
import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

function Intranet() {
  const companies = CompanyData.companies[2].aimag;
  const aimag = CompanyData.companies.map((item) => item.aimag);

  return (
    <>
      <section className="flex w-full overflow-hidden h-100">
        <div className="m-5">
          <Box>
            <SimpleTreeView>
              <TreeItem itemId="grid-community1" label="@mui/x-data-grid" />
              <TreeItem
                itemId="grid-community"
                label={CompanyData.companies[2].name}
              >
                {companies.map((aimag, index) => (
                  <TreeItem
                    itemId="grid-community"
                    label={aimag.branch}
                    key={index}
                  ></TreeItem>
                ))}
              </TreeItem>
            </SimpleTreeView>
          </Box>
        </div>

        <div>
          <div className="mt-5 flex w-full justify-evenly sticky ">
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
