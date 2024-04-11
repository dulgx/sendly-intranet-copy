import React from "react";
import pdfIcon from "../../assets/pdf.png";
import data from "../../json-files/juram-data.json";

const allGarchigData = [
  ...data.ZUA,
  ...data.ZChiglel,
  ...data.SalbarUA,
  ...data.NBB,
  ...data.HR,
  ...data.ENuhtsul,
  ...data.Contract,
  ...data.Blank,
];

export default function ZeelUA() {
  return (
    <div className="flex justify-center">
      <div className="grid max-w-2xl grid-cols-1 gap-x-1 gap-y-1 pt-10  lg:mx-0 lg:max-w-none lg:grid-cols-3 md:grid-cols-2">
        {allGarchigData.map((item, index) => (
          <article
            key={index}
            className="bg-stone-100 p-5 rounded-xl shadow hover:bg-sky-50 cursor-pointer w-72 m-5 h-44 content-evenly border"
          >
            <div className="flex flex-row items-center">
              <img src={pdfIcon} alt="folder" className="w-16" />
              <h3 className="m-3 text-base font-semibold leading-6 text-gray-900 group-hover:text-gray-600 flex ml-4 h-20 text-center">
                {item.title}
              </h3>
            </div>
            <div className=" flex justify-around">
              <span className=" font-semibold text-sm font">{item.date}</span>
              <button className="bg-red-600 text-white w-20 rounded-2xl text-xs font-normal h-5 hover:bg-red-500 hover:font-semibold">
                НЭЭХ
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
