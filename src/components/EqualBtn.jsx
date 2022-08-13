import React, { useContext } from "react";
import CalcBtn from "./CalcBtn";
import { SIGNS_ARR } from "../static/static";
import { calculationContext } from "./Calculator";
import { evaluate } from "../utils/math";

const EqaulBtn = () => {
  const {
    displayOutput,
    setDisplayOutput,
    formulaOutput,
    setFormulaOutput,
    equalStatus,
    setEqualStatus,
  } = useContext(calculationContext);

  const onClickHandler = () => {
    if (equalStatus || SIGNS_ARR.includes(displayOutput)) {
      return;
    }
    if (displayOutput === "0" && formulaOutput === "") {
      return;
    }
    setEqualStatus(true);
    setDisplayOutput(evaluate(formulaOutput));
    setFormulaOutput((prev) => prev + "=");
    return;
  };

  return (
    <CalcBtn className="btnOrange" id="equals" onClickHandler={onClickHandler}>
      =
    </CalcBtn>
  );
};

export default EqaulBtn;
