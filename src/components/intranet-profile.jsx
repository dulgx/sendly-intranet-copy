import React from "react";
import employee from "../json-files/employee.json";

const employeeProfile = employee.employees;

console.log(employeeProfile);

function IntranetProfile() {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {employeeProfile.map((employ) => (
            <div className="text-center text-gray-500">
              <img
                className="mx-auto mb-4 w-28 h-28 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                alt="Bonnie Avatar"
              />
              <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900">
                <a>{employ.name} </a>
              </h3>
              <p>{employ.position}</p>
              <p>
                <span classNameName="text-slate-900 font-semibold">
                  Гар утас :
                </span>{" "}
                {employ.mobile_phone}
              </p>
              <p classNameName="cursor-pointer hover:text-blue-600">
                <span classNameName="text-slate-900 font-semibold ">
                  И-мэйл :
                </span>{" "}
                <a href={`mailto:${employ.email}`}>{employ.email}</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntranetProfile;
