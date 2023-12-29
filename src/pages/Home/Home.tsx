import React from "react";
import "./Home.scss";
import { TypeAnimation } from "react-type-animation";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h2 className="header">
        <TypeAnimation
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
          style={{ fontSize: "3em" }}
          repeat={Infinity}
        />
      </h2>
    </div>
  );
};

export default Home;
