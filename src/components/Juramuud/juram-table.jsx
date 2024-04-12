import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import data from "../../json-files/juram-data.json";
import pdfIcon from "../../assets/pdf.png";

function createData(name, number, date) {
  return { name, number, date };
}

export default function JuramTable({ titleData, icon }) {
  const rows = data[titleData].map((item) =>
    createData(item.title, item.numberID, item.date)
  );

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
                  {icon === pdfIcon
                    ? "БАТЛАГДСАН ОГНОО"
                    : "ШИНЭЧИЛЭГДСЭН ОГНОО"}
                </p>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} className="hover:bg-rose-100">
                <TableCell className="w-16 ">
                  <img src={[icon]} alt="icon" className="h-8" />
                </TableCell>
                <TableCell className="flex cursor-pointer">
                  {row.name}
                </TableCell>
                <TableCell className="w-24">{row.number}</TableCell>
                <TableCell className="w-28">{row.date}</TableCell>
                <TableCell className="w-24">
                  <button className="bg-red-600 text-white w-20 rounded-2xl text-xs font-normal h-5 hover:bg-red-500 hover:font-semibold">
                    {icon === pdfIcon ? "НЭЭХ" : "ТАТАХ"}
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
