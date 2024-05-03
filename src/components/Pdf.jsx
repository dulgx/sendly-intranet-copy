import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import pdfFile from "../assets/pdf-files/etz.pdf";

const Pdf = () => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div>
      <Document
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
        options={{ disableWorker: true }}
      >
        {Array.from(new Array(numPages), (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        ))}
      </Document>
    </div>
  );
};

export default Pdf;
