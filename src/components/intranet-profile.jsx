import React, { useEffect, useState } from "react";

function IntranetProfile() {
  const [fetchData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://192.168.90.91/apps/test_hr/intranet/employee_data_json.php?br_id=1010100"
        );
        const data = await response.json();
        setFetchedData(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="grid gap-10 lg:gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {fetchData.map((item, index) => (
            <div className="text-center text-gray-500 w-60" key={index}>
              <img
                className="mx-auto mb-4 w-28 h-36 rounded-full"
                src={item.photo}
                alt="employee photo"
              />
              <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900">
                <a>{item.name} </a>
              </h3>
              <p className="font-semibold text-slate-800">{item.position}</p>
              <p>
                <span classNameName="text-slate-900 font-semibold">
                  Гар утас :
                </span>{" "}
                {item.mobile_phone}
              </p>
              <p classNameName="cursor-pointer hover:text-blue-600">
                <span classNameName="text-slate-900 font-semibold ">
                  И-мэйл :
                </span>{" "}
                <a
                  className=" hover:text-cyan-800 hover:font-semibold font-medium"
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
}

export default IntranetProfile;
