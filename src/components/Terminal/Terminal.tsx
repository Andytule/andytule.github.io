import React from "react";
import "./Terminal.scss";
import CodeStatement from "../../components/CodeStatement/CodeStatement";
import aboutData from "../../data/aboutMe";
import { TypeAnimation } from "react-type-animation";

const Terminal: React.FC = () => {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="header-button red" />
        <div className="header-button yellow" />
        <div className="header-button green" />
      </div>
      <div className="terminal-window">
        <div className="terminal-content">
          {aboutData.map((statement, index) => (
            <CodeStatement
              key={index}
              input={statement.input}
              return={statement.return}
            />
          ))}
          <div className="code-statement">
            <div className="input-statement">
              <span>&gt;&nbsp;</span>
              Andy.currentJob
            </div>
            <div className="return-statement">
              <TypeAnimation
                sequence={[
                  "Software Engineer - Ceridian",
                  5000,
                  "ソフトウェアエンジニア",
                  5000,
                ]}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
