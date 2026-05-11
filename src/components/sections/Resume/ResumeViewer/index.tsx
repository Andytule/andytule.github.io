import { Download } from 'lucide-react';
import React from 'react';
import { Document, Page } from 'react-pdf';

import type { ResumeViewerProps } from '../types';

const LoadingState: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-24 gap-4">
    <div className="w-full max-w-[480px] animate-pulse space-y-3 px-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="h-3 rounded-full bg-white/[0.06]"
          style={{ width: `${70 + Math.sin(i * 1.7) * 25}%` }}
        />
      ))}
    </div>
    <p className="text-[0.75rem] text-[var(--color-text-tertiary)] tracking-wide mt-2">
      Loading résumé…
    </p>
  </div>
);

const ErrorState: React.FC<{ file: string }> = ({ file }) => (
  <div className="flex flex-col items-center justify-center py-24 gap-3 text-center px-6">
    <div className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center mb-1">
      <span className="text-xl">📄</span>
    </div>
    <p className="text-[0.875rem] text-[var(--color-text-secondary)]">Could not load the PDF.</p>
    <a
      href={file}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[0.8125rem] text-[var(--color-accent)] hover:text-[var(--color-accent-bright)] transition-colors duration-150"
    >
      Open directly ↗
    </a>
  </div>
);

const ResumeViewer: React.FC<ResumeViewerProps> = ({
  file,
  downloadName,
  pageWidth,
  currentPage,
  onLoadSuccess,
}) => (
  <div className="flex justify-center">
    {/* This wrapper is sized exactly to the PDF, so absolute children sit on top of it */}
    <div className="relative" style={{ width: pageWidth }}>
      {/* Download button — top-right corner overlaid on the PDF */}
      <a
        href={file}
        download={downloadName}
        aria-label="Download résumé PDF"
        className={[
          'absolute top-3 right-3 z-10',
          'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg',
          'border border-white/[0.12] bg-black/50 backdrop-blur-md',
          'text-white/80 text-[0.75rem] font-medium tracking-[-0.01em]',
          'no-underline transition-all duration-150',
          'hover:text-white hover:border-white/[0.25] hover:bg-black/70',
          'active:scale-[0.97]',
        ].join(' ')}
      >
        <Download size={12} />
        Download
      </a>

      <Document
        file={file}
        onLoadSuccess={({ numPages }) => onLoadSuccess(numPages)}
        loading={<LoadingState />}
        error={<ErrorState file={file} />}
      >
        <div className="overflow-hidden rounded-lg shadow-[0_8px_40px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.06)]">
          <Page pageNumber={currentPage} width={pageWidth} renderTextLayer renderAnnotationLayer />
        </div>
      </Document>
    </div>
  </div>
);

export default ResumeViewer;
