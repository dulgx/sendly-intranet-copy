import React from "react";
import pdfIcon from "../../assets/pdf.png";

const titles = [
  "Зээлийн бодлого",
  "Зээлийн үйл ажиллагааны журам",
  "Зээлийн үйл ажиллагааны журам-Хавсралт",
  "Зээлийн хорооны журам",
  "Хөрөнгийн үнэлгээний заавар",
  "Актив ангилах журам",
];

export default function ZeelUA() {
  return (
    <div className="flex justify-center">
      <div className="m-24 flex justify-center ">
        {titles.map((title, index) => (
          <article
            key={index}
            className="bg-stone-100 p-5 rounded-xl shadow hover:bg-sky-50 cursor-pointer w-40 m-4"
          >
            <div className="flex flex-col items-center">
              <img src={pdfIcon} alt="folder" className="w-14" />
              <h3 className="m-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 flex ml-4">
                {title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
