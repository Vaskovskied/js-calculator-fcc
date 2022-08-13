import React, { useContext } from "react";
import CalcBtn from "./CalcBtn";
import { SIGNS_ARR } from "../static/static";
import { calculationContext } from "./Calculator";
import { evaluate } from "../utils/math";

const SignBtn = ({ sign, id }) => {
  const {
    displayOutput,
    setDisplayOutput,
    formulaOutput,
    setFormulaOutput,
    equalStatus,
    setEqualStatus,
  } = useContext(calculationContext);

  const onClickHandler = () => {
    if (equalStatus) {
      setEqualStatus(false);
      setDisplayOutput(sign);
      setFormulaOutput(
        evaluate(formulaOutput.slice(0, formulaOutput.lastIndexOf("="))) + sign
      );
      return;
    }
    if (
      SIGNS_ARR.includes(formulaOutput.slice(-2, -1)) &&
      displayOutput === "-"
    ) {
      setDisplayOutput(sign);
      setFormulaOutput((prev) => prev.slice(0, -2) + sign);
    }
    if (sign === displayOutput) {
      return;
    }
    if (SIGNS_ARR.includes(displayOutput) && sign !== "-") {
      setDisplayOutput(sign);
      setFormulaOutput((prev) => prev.slice(0, -1) + sign);
      return;
    }
    setDisplayOutput(sign);
    setFormulaOutput((prev) => prev + sign);
  };

  return (
    <CalcBtn className="btnBlack" id={id} onClickHandler={onClickHandler}>
      {sign}
    </CalcBtn>
  );
};

export default SignBtn;
