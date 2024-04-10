import React, { useState } from "react";
import CompanyData from "../assets/salbar.json";
import Employee from '../assets/employee.json'
import Grouped from "./SalbaraarHaih";

function Intranet() {
  const companyData = CompanyData.companies;
  const employeeData = Employee;
  
  return (
    <>
      <section className='flex w-full overflow-hidden h-100'>
        <div className="text-sm m-5 min-w-60">
          <ul>
            {companyData.map((company) => (
              <li key={company.name}>
                <strong
                  className="hover:bg-sky-700
                hover:text-white
                rounded-md cursor-pointer"
                >
                  {company.name}
                </strong>
                {company.subsidiaries && (
                  <ul className="ml-10 cursor-pointer ">
                    {company.subsidiaries.map((subsidiary) => (
                      <li
                        key={subsidiary.branch || subsidiary}
                        className="hover:bg-sky-700 hover:text-white rounded-md"
                      >
                        {subsidiary.branch || subsidiary}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex w-full justify-evenly sticky ">
          <form class="max-w-md w-72">   
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Хайх</label>
              <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Нэр, утас, салбарын нэр" required />
                  <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Хайх</button>
              </div>
          </form>
          <Grouped />
        </div>
      </section>
    </>
  );
}

export default Intranet;
