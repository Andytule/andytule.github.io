import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import { Download, FileText } from 'lucide-react';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import useScrollReveal from '@/hooks/useScrollReveal';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();
  const [numPages, setNumPages] = useState<number>(0);
  const [pageWidth, setPageWidth] = useState<number>(860);

  React.useEffect(() => {
    const update = () => {
      setPageWidth(Math.min(860, window.innerWidth - 96));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section id="resume" className="mx-auto max-w-[1200px] px-6 py-16" ref={ref}>
      {/* Section header */}
      <div className="mb-10">
        <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-[#60a5fa]">
          Resume
        </p>
        <h2 className="font-display text-[clamp(1.75rem,4vw,2rem)] font-semibold tracking-tight text-[#f0f0f2]">
          My Résumé
        </h2>
        <div className="mt-2 h-0.5 w-10 rounded-full bg-[#3b82f6]" />
      </div>

      <Card className="overflow-hidden border-white/7 bg-[#141416]">
        {/* Card header bar */}
        <div className="flex items-center justify-between border-b border-white/7 px-6 py-4">
          <div className="flex items-center gap-2.5">
            <FileText size={18} className="text-[#60a5fa]" />
            <span className="font-display text-base font-bold text-[#f0f0f2]">
              Andy Le — Résumé
            </span>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href="/andy_le_resume.pdf" download="Andy_Le_Resume.pdf">
              <Download size={13} />
              Download PDF
            </a>
          </Button>
        </div>

        <CardContent className="flex flex-col items-center gap-6 p-6">
          <Document
            file="/andy_le_resume.pdf"
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={
              <div className="py-16 text-center text-sm text-[#4a4a55]">Loading résumé…</div>
            }
            error={
              <div className="py-16 text-center text-sm text-[#4a4a55]">
                Could not load PDF.{' '}
                <a
                  href="/andy_le_resume.pdf"
                  className="text-[#60a5fa] underline"
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
                {i < numPages - 1 && <Separator className="my-2 w-full" />}
              </React.Fragment>
            ))}
          </Document>
        </CardContent>
      </Card>
    </section>
  );
};

export default Resume;
