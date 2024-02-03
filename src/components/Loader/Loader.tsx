import React from "react";
import "./Loader.scss";
import ClipLoader from "react-spinners/ClipLoader";

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <div className="loading-spinner-container">
      <ClipLoader size={100} color="#558bd9" loading={loading} />
    </div>
  );
};

export default Loader;
