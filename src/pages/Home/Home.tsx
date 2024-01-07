import React from "react";
import "./Home.scss";
import Terminal from "../../components/Terminal/Terminal";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home-container">
        <h2 className="home-portfolio-name">Andy Le</h2>
        <Terminal />
      </div>
    </div>
  );
};

export default Home;
