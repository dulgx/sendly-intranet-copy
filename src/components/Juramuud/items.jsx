import React from "react";
import pdfIcon from "../../assets/pdf.png";
import data from "../../json-files/juram-data.json";

const garchig = data.ZUA.map((item) => item.title);
const garchig1 = data.ZChiglel.map((item) => item.title);
const garchig2 = data.SalbarUA.map((item) => item.title);
const garchig3 = data.NBB.map((item) => item.title);
const garchig4 = data.HR.map((item) => item.title);
const garchig5 = data.ENuhtsul.map((item) => item.title);
const garchig6 = data.Contract.map((item) => item.title);
const garchig7 = data.Blank.map((item) => item.title);

export default function ZeelUA({}) {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid max-w-2xl grid-cols-1 gap-x-1 gap-y-1 pt-10  lg:mx-0 lg:max-w-none lg:grid-cols-3 md:grid-cols-2">
          {garchig.map((title, index) => (
            <article
              key={index}
              className="bg-stone-100 p-5 rounded-xl shadow hover:bg-sky-50 cursor-pointer w-72 m-5 h-44 content-evenly border"
            >
              <div className="flex flex-row items-center">
                <img src={pdfIcon} alt="folder" className="w-16" />
                <h3 className="m-3 text- font-semibold leading-6 text-gray-900 group-hover:text-gray-600 flex ml-4 h-20 text-center">
                  {garchig[index]}
                </h3>
              </div>
              <div className=" flex justify-around">
                <span className=" font-semibold text-sm font">
                  {data.ZUA[index].date}
                </span>
                <button className="bg-red-600 text-white w-20 rounded-2xl text-xs font-normal h-5 hover:bg-red-500 hover:font-semibold">
                  НЭЭХ
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export function ZUChiglel() {
  return (
    <div className="flex justify-center">
      <div className="grid max-w-2xl grid-cols-1 gap-x-1 gap-y-1 pt-10  lg:mx-0 lg:max-w-none lg:grid-cols-3 md:grid-cols-2">
        {garchig1.map((title, index) => (
          <article
            key={index}
            className="bg-stone-100 p-5 rounded-xl shadow hover:bg-sky-50 cursor-pointer w-72 m-5 h-44 content-evenly border"
          >
            <div className="flex flex-row items-center">
              <img src={pdfIcon} alt="folder" className="w-16" />
              <h3 className="m-3 text-base font-semibold leading-6 text-gray-900 group-hover:text-gray-600 flex ml-4 h-20 text-center">
                {garchig1[index]}
              </h3>
            </div>
            <div className=" flex justify-around">
              <span className=" font-semibold text-sm font">
                {data.ZChiglel[index].date}
              </span>
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
