import React from "react";
import "./Home.scss";
import { TypeAnimation } from "react-type-animation";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h2 className="home-header-wrapper">
        <TypeAnimation
          className="home-header"
          sequence={[
            "Hi! I'm Andy.",
            5000,
            "アンディです。",
            5000,
            "Have a wonderful day.",
            5000,
            "素敵な一日を",
            5000,
          ]}
          repeat={Infinity}
        />
      </h2>
    </div>
  );
};

export default Home;
