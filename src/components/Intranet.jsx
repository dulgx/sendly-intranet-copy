import React from "react";
import CompanyData from "../assets/salbar.json";

function Intranet() {
  const companyData = CompanyData.companies;
  return (
    <>
      <section>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <div className="text-sm m-5 w-52 ">
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
      </section>
    </>
  );
}

export default Intranet;
