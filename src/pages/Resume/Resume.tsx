import React, { useEffect, useRef, useState } from "react";
import "./Resume.scss";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import Loader from "../../components/Loader/Loader";

const Resume: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [loading]);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 750);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="resume">
      <div className="resume-container">
        {loading ? (
          <Loader loading={loading} />
        ) : (
          <>
            <h2 className="section-title">Resume</h2>
            <div ref={containerRef}>
              <Document file="/resume.pdf" className="resume-document">
                <Page pageNumber={1} width={containerWidth} />
              </Document>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Resume;
