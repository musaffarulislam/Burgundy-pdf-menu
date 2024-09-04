import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import menuList from "./menu-list.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Menu: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [loading, setLoading] = useState(true); 

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false); 
  };

  return (
    <div className="h-screen flex justify-center overflow-auto">
      <div className="w-full flex flex-col items-center max-w-[600px]">
        {loading && <p>Loading...</p>}
        <Document 
          file={menuList}
          loading={false}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(
            new Array(numPages),
            (_, index) => (
              <Page 
                key={`page_${index + 1}`} 
                pageNumber={index + 1} 
                renderTextLayer={false}
                renderAnnotationLayer={false}
                loading={false}
                width={window.innerWidth}
              />
            )
          )}
        </Document>
      </div>
    </div>
  );
}

export default Menu;
