import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import React, { useCallback, useEffect, useState } from 'react';
import { pdfjs } from 'react-pdf';

import { SectionHeader } from '@/components/shared';

import ResumeViewer from './ResumeViewer';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const RESUME_FILE = '/andy_le_resume.pdf';
const RESUME_DOWNLOAD_NAME = 'Andy_Le_Resume.pdf';

const Resume: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageWidth, setPageWidth] = useState<number>(860);

  useEffect(() => {
    const update = () => setPageWidth(Math.min(860, window.innerWidth - 96));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const handleLoadSuccess = useCallback(() => {
    setCurrentPage(1);
  }, []);

  return (
    <section id="resume" className="mx-auto max-w-[1200px] px-6 md:px-8 py-24">
      <SectionHeader
        title={
          <>
            My <span className="text-[var(--color-accent)]">Résumé.</span>
          </>
        }
      />
      <ResumeViewer
        file={RESUME_FILE}
        downloadName={RESUME_DOWNLOAD_NAME}
        pageWidth={pageWidth}
        currentPage={currentPage}
        onLoadSuccess={handleLoadSuccess}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};

export default Resume;
