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
            "こんにちは！私はアンディです。",
            5000,
            "Have a wonderful day.",
            5000,
            "素敵な一日を",
            5000,
          ]}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
      </h2>
    </div>
  );
};

export default Home;
