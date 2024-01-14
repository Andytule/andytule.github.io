import React from "react";
import "./CodeStatement.scss";
import { CodeStatementProps } from "../../types/CodeStatement";

const CodeStatement: React.FC<CodeStatementProps> = ({
  input,
  return: returnValue,
}) => {
  return (
    <div className="code-statement">
      <div className="input-statement">
        <span>&gt;&nbsp;</span>
        {input}
      </div>
      <div
        className="return-statement"
        dangerouslySetInnerHTML={{ __html: returnValue }}
      />
    </div>
  );
};

export default CodeStatement;
