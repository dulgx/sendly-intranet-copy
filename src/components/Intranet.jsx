import React, { useState, useEffect } from "react";
import Grouped from "./SalbaraarHaih";
import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

function Intranet() {
  const [fetchedData, setFetchedData] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);
  const [brId, setBrId] = useState("1011000");

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://192.168.90.91/apps/test_hr/intranet/employee_data_json.php?br_id=${brId}`
        );
        const data = await response.json();
        setEmployeeData(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    if (brId !== "") {
      fetchData();
    }
  }, [brId]);

  const mainBranch = fetchedData.filter(
    (item) => item.br_id >= 1000 && item.br_id <= 2000
  );
  const sendlyBranch = fetchedData.filter(
    (item) => item.br_id >= 1011000 && item.br_id <= 1091276
  );
  const gyalsBranch = fetchedData.filter(
    (item) => item.br_id >= 1010100 && item.br_id <= 1010283
  );

  function handleClick(companyID) {
    setBrId(companyID);
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
                      />
                    ))}
                </TreeItem>
              ))}
            </SimpleTreeView>
          </Box>
        </div>

        <div>
          <div className="mt-5 flex w-full justify-evenly static">
            <form className="max-w-md w-72">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Хайх
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Нэр, утасаар хайх"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
                >
                  Хайх
                </button>
              </div>
            </form>
            <Grouped />
          </div>
          <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-2xl  text-center lg:py-16 lg:px-6">
              <div className="grid gap-10 lg:gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {employeeData.map((item, index) => (
                  <div className="text-center text-gray-500" key={index}>
                    <img
                      className="mx-auto mb-4 w-25 h-32 rounded-full"
                      src={item.photo}
                      alt="employee photo"
                    />
                    <h3 className="mb-1 text-base font-bold tracking-tight text-gray-900">
                      <a>{item.name} </a>
                    </h3>
                    <p className="font-semibold text-slate-800 text-sm">
                      {item.position}
                    </p>
                    <p>
                      <span className="text-slate-900 font-semibold text-sm">
                        Гар утас :
                      </span>{" "}
                      {item.mobile_phone}
                    </p>
                    <p className="cursor-pointer hover:text-blue-600 text-sm">
                      <span className="text-slate-900 font-semibold ">
                        И-мэйл :
                      </span>{" "}
                      <a
                        className=" hover:text-cyan-800 hover:font-semibold font-medium text-sm"
                        href={`mailto:${item.email}`}
                      >
                        {item.email}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Intranet;
