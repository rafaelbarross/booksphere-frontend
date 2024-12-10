'use client'

import { useState } from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

export default function PdfComponent() {
  const pdfFile = "./book-pdf/O Pequeno Principe.pdf";

  return (
    <>
      <iframe
        src={pdfFile}
        // 
        className='w-full h-[38rem] '
        frameBorder="0"
      >
        Este navegador não suporta a visualização de PDFs. Por favor, faça o download do PDF para visualizá-lo:
        <a href={pdfFile}>Download PDF</a>
      </iframe>
    </>
  );
}
