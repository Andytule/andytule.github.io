import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import { Download, FileText } from 'lucide-react';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import SectionHeader from '@/components/shared/SectionHeader';
import useScrollReveal from '@/hooks/useScrollReveal';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();
  const [numPages, setNumPages] = useState<number>(0);
  const [pageWidth, setPageWidth] = useState<number>(860);

  React.useEffect(() => {
    const update = () => setPageWidth(Math.min(860, window.innerWidth - 96));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section id="resume" ref={ref} className="mx-auto max-w-[1100px] px-6 py-24">
      <SectionHeader eyebrow="Resume" title="My Résumé" />

      <div className="overflow-hidden border border-white/10 rounded-3xl bg-[var(--color-surface-low)]">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.07]">
          <div className="flex items-center gap-2.5">
            <FileText size={16} className="text-[#3b9eff]" />
            <span className="font-[var(--font-display)] text-[0.9375rem] font-semibold text-[#f0f0f5] tracking-[-0.02em]">
              Andy Le — Résumé
            </span>
          </div>

          <a
            href="/andy_le_resume.pdf"
            download="Andy_Le_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-[0.4375rem] rounded-full border border-white/[0.12] bg-transparent text-[#8a8a96] text-[0.8125rem] font-medium tracking-[-0.01em] no-underline transition-colors duration-150 hover:text-[#f0f0f5] hover:border-white/25"
          >
            <Download size={12} />
            Download PDF
          </a>
        </div>

        {/* PDF viewer */}
        <div className="flex flex-col items-center gap-6 p-8">
          <Document
            file="/andy_le_resume.pdf"
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={
              <div className="py-20 text-center text-sm text-[#52525e]">Loading résumé…</div>
            }
            error={
              <div className="py-20 text-center text-sm text-[#52525e]">
                Could not load PDF.{' '}
                <a
                  href="/andy_le_resume.pdf"
                  className="text-[#3b9eff]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open directly ↗
                </a>
              </div>
            }
          >
            {Array.from({ length: numPages }, (_, i) => (
              <React.Fragment key={i + 1}>
                <Page pageNumber={i + 1} width={pageWidth} renderTextLayer renderAnnotationLayer />
                {i < numPages - 1 && <div className="w-full h-px bg-white/[0.06] my-2" />}
              </React.Fragment>
            ))}
          </Document>
        </div>
      </div>
    </section>
  );
};

export default Resume;
