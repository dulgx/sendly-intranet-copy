import React, { useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import data from "../../json-files/juram-data.json";
import svg1 from "../../assets/svg1.svg";
import WebViewer from "@pdftron/pdfjs-express-viewer";

const openPdf = (title1) => {
  const pdfUrl = `../../../pdf/${title1}.pdf`;
  window.open(pdfUrl, "_blank");
  console.log(pdfUrl);

  WebViewer(
    {
      path: "/webviewer/lib",
      initialDoc: pdfUrl,
    },
    viewer.current
  ).then((instance) => {
    // now you can access APIs through the WebViewer instance
    const { Core } = instance;

    // adding an event listener for when a document is loaded
    Core.documentViewer.addEventListener("documentLoaded", () => {
      console.log("document loaded");
    });

    // adding an event listener for when the page number has changed
    Core.documentViewer.addEventListener("pageNumberUpdated", (pageNumber) => {
      console.log(`Page number is: ${pageNumber}`);
    });
  });
};

function createData(name, number, date) {
  return { name, number, date };
}

export default function JuramTable({ titleData, icon }) {
  const rows = data[titleData].map((item) =>
    createData(item.title, item.numberID, item.date)
  );

  const viewer = useRef(null);

  return (
    <div className="flex justify-center">
      <TableContainer className="m-5 flex justify-center mt-20">
        <Table className="max-w-7xl">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>НЭР</TableCell>
              <TableCell>ДУГААР</TableCell>
              <TableCell>
                <p className="text-center">
                  {icon === svg1 ? "БАТЛАГДСАН ОГНОО" : "ШИНЭЧИЛЭГДСЭН ОГНОО"}
                </p>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} className="hover:bg-slate-200">
                <TableCell className="w-16 ">
                  <img src={[icon]} alt="icon" className="h-8" />
                </TableCell>
                <TableCell
                  className="flex cursor-pointer hover:text-blue-500"
                  onClick={() => openPdf(row.name)}
                  ref={viewer}
                >
                  {row.name}
                </TableCell>
                <TableCell className="w-24 flex">
                  {" "}
                  <span className="justify-center">{row.number}</span>
                </TableCell>
                <TableCell className="w-52 justify-center">
                  {row.date}
                </TableCell>
                <TableCell className="w-24">
                  <button
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-0.5 text-center me-2 mb-2"
                    onClick={() => openPdf(row.name)}
                  >
                    {icon === svg1 ? "Нээх" : "Татах"}
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
