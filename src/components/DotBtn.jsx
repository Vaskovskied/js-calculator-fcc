import React, { useContext } from "react";
import CalcBtn from "./CalcBtn";
import { SIGNS_ARR } from "../static/static";
import { calculationContext } from "./Calculator";

const DotBtn = () => {
  const {
    displayOutput,
    setDisplayOutput,
    formulaOutput,
    setFormulaOutput,
    equalStatus,
    setEqualStatus,
    showLimitMessage,
  } = useContext(calculationContext);

  const onClickHandler = () => {
    if (showLimitMessage()) return;
    if (equalStatus) {
      setEqualStatus(false);
      setDisplayOutput("0.");
      setFormulaOutput("0.");
      return;
    }
    if (displayOutput.includes(".")) {
      return;
    }
    if (SIGNS_ARR.includes(displayOutput)) {
      setDisplayOutput("0.");
      setFormulaOutput((prev) => prev + "0.");
      return;
    }
    if (displayOutput === "0") {
      if (displayOutput === "") {
        setDisplayOutput((prev) => prev + "0.");
        setFormulaOutput((prev) => prev + "0.");
        return;
      }
      if (displayOutput === "0" && formulaOutput === "") {
        setFormulaOutput((prev) => prev + "0");
      }
    }
    setDisplayOutput((prev) => prev + ".");
    setFormulaOutput((prev) => prev + ".");
  };

  return (
    <CalcBtn id="decimal" onClickHandler={onClickHandler}>
      .
    </CalcBtn>
  );
};

export default DotBtn;
