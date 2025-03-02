"use client";
import React, { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

//================ PDF Worker ================
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Flipbook = () => {
  const [numPages, setNumPages] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const flipBookRef = useRef(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoaded(true);
  };

  const onFlip = (e) => {
    console.log("Current page:", e.data + 1);
  };

  const PdfPage = ({ pageNumber }) => (
    <div className="page">
      <Page
        pageNumber={pageNumber}
        width={500} // عرض أكبر ليظهر الكتاب كاملاً
        renderAnnotationLayer={false}
        renderTextLayer={true}
      />
    </div>
  );

  return (
    <div className="flipbook-container">
      {!loaded && <p>Loading PDF...</p>}
      <Document
        file="/test.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(error) => console.error("PDF Load Error:", error)}
      >
        {loaded && numPages && (
          <HTMLFlipBook
            width={500}
            height={700}
            size="stretch"
            minWidth={300}
            maxWidth={800}
            minHeight={400}
            maxHeight={1000}
            maxShadowOpacity={0.5} // ظلال واقعية عند قلب الصفحات
            showCover={true} // إظهار غلاف الكتاب
            autoSize={true}
            mobileScrollSupport={true}
            ref={flipBookRef}
            onFlip={onFlip}
            className="flipbook"
          >
            {Array.from(new Array(numPages), (_, index) => (
              <div key={`page_${index + 1}`} className="page-container">
                <PdfPage pageNumber={index + 1} />
              </div>
            ))}
          </HTMLFlipBook>
        )}
      </Document>

      {loaded && (
        <div className="navigation">
          <button
            className="nav-button"
            onClick={() => flipBookRef.current.pageFlip().flipPrev()}
            disabled={!loaded}
          >
            Previous
          </button>
          <button
            className="nav-button"
            onClick={() => flipBookRef.current.pageFlip().flipNext()}
            disabled={!loaded}
          >
            Next
          </button>
        </div>
      )}

      {/*================ Styles ================*/}
      <style jsx>{`
        .flipbook-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          background: #f3f4f6;
          border-radius: 15px;
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
        }
        .page-container {
          background: #fff;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        .flipbook {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-radius: 10px;
        }
        .navigation {
          margin-top: 20px;
          display: flex;
          gap: 20px;
        }
        .nav-button {
          padding: 10px 25px;
          font-size: 16px;
          cursor: pointer;
          background-color: #2563eb;
          color: white;
          border: none;
          border-radius: 30px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }
        .nav-button:hover {
          background-color: #1e40af;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          transform: translateY(-3px);
        }
        .nav-button:disabled {
          background-color: #9ca3af;
          cursor: not-allowed;
          box-shadow: none;
        }
      `}</style>
    </div>
  );
};

export default Flipbook;
