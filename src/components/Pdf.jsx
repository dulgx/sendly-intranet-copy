import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import pdfFile from "../assets/pdf-files/etz.pdf";

const Pdf = () => {
  return (
    <Document
      file={pdfFile}
      onLoadSuccess={() => console.log("PDF loaded successfully")}
      onLoadError={(error) => console.error("Error loading PDF:", error)}
    >
      <Page pageNumber={1} />
    </Document>
  );
};

export default Pdf;
