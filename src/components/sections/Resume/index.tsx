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
    <section
      id="resume"
      ref={ref}
      style={{ margin: '0 auto', maxWidth: '1100px', padding: '6rem 1.5rem' }}
    >
      <SectionHeader eyebrow="Resume" title="My Résumé" />

      <div
        style={{
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '1.5rem',
          background: 'var(--color-surface-low)',
        }}
      >
        {/* Header bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.5rem',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <FileText size={16} style={{ color: '#3b9eff' }} />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: '#f0f0f5',
                letterSpacing: '-0.02em',
              }}
            >
              Andy Le — Résumé
            </span>
          </div>

          <a
            href="/andy_le_resume.pdf"
            download="Andy_Le_Resume.pdf"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              padding: '0.4375rem 0.875rem',
              borderRadius: '9999px',
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'transparent',
              color: '#8a8a96',
              fontSize: '0.8125rem',
              fontWeight: 500,
              letterSpacing: '-0.01em',
              transition: 'color 0.15s ease, border-color 0.15s ease',
              textDecoration: 'none',
            }}
            className="hover:text-[#f0f0f5] hover:border-[rgba(255,255,255,0.25)]"
          >
            <Download size={12} />
            Download PDF
          </a>
        </div>

        {/* PDF viewer */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            padding: '2rem',
          }}
        >
          <Document
            file="/andy_le_resume.pdf"
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={
              <div
                style={{
                  padding: '5rem 0',
                  textAlign: 'center',
                  fontSize: '0.875rem',
                  color: '#52525e',
                }}
              >
                Loading résumé…
              </div>
            }
            error={
              <div
                style={{
                  padding: '5rem 0',
                  textAlign: 'center',
                  fontSize: '0.875rem',
                  color: '#52525e',
                }}
              >
                Could not load PDF.{' '}
                <a
                  href="/andy_le_resume.pdf"
                  style={{ color: '#3b9eff' }}
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
                {i < numPages - 1 && (
                  <div
                    style={{
                      width: '100%',
                      height: '1px',
                      background: 'rgba(255,255,255,0.06)',
                      margin: '0.5rem 0',
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </Document>
        </div>
      </div>
    </section>
  );
};

export default Resume;
