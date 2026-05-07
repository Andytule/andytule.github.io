export interface ResumeViewerProps {
  file: string;
  downloadName: string;
  pageWidth: number;
  currentPage: number;
  onLoadSuccess: (numPages: number) => void;
  onPageChange: (page: number) => void;
}
