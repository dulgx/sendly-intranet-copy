import React from "react";

const EmployeeList = ({ employeeData }) => {
  return (
    <section className="bg-white overflow-y-auto">
      <div className="py-8 px-4 mx-auto max-w-screen-2xl  text-center lg:py-16 lg:px-6">
        <div className="grid gap-10 lg:gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {employeeData.map((item, index) => (
            <div className="text-center text-gray-500" key={index}>
              <img
                className="mx-auto mb-4 h-32 rounded-full"
                src={item.photo}
                alt="employee photo"
              />
              <h3 className="mb-1 text-base font-bold tracking-tight text-gray-900">
                <a>{item.name} </a>
              </h3>
              <p className="font-semibold text-slate-800 text-sm">
                <p className="text-slate-500 text-md">{item.branch_name}</p>
                <p className=" italic">{item.position}</p>
              </p>

              <p>
                <span className="text-slate-900 font-semibold text-sm">
                  Гар утас :
                </span>{" "}
                {item.mobile_phone}
              </p>
              <p className="cursor-pointer hover:text-blue-600 text-sm">
                <span className="text-slate-900 font-semibold  text-sm">
                  И-мэйл :
                </span>{" "}
                <a
                  className="  hover:font-semibold font-medium text-sm hover:text-blue-600 text-slate-900"
                  target="_blank"
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
  );
};

export default EmployeeList;
