import React, { useState, useEffect } from "react";
import "./Home.scss";
import Terminal from "../../components/Terminal/Terminal";
import Loader from "../../components/Loader/Loader";

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
          <Loader loading={loading} />
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
