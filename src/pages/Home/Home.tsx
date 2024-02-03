import React, { useState, useEffect } from "react";
import "./Home.scss";
import Terminal from "../../components/Terminal/Terminal";
import ClipLoader from "react-spinners/ClipLoader";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="home">
      <div className="home-container">
        {loading ? (
          <div className="loading-spinner-container">
            <ClipLoader size={150} color="#ffffff" loading={loading} />
          </div>
        ) : (
          <>
            <h2 className="home-portfolio-name">Andy Le</h2>
            <Terminal />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
