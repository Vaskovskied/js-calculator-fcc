import React, { useContext } from "react";
import { calculationContext } from "./Calculator";

function Display() {
  const { displayOutput, formulaOutput } = useContext(calculationContext);
  return (
    <div className="display">
      <div className="formula-output">{formulaOutput}</div>
      <div className="display-output" id="display">
        {displayOutput}
      </div>
    </div>
  );
}

export default Display;
