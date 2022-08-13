import React, { useContext } from "react";
import { SIGNS_ARR } from "../static/static";
import CalcBtn from "./CalcBtn";
import { calculationContext } from "./Calculator";

const NumberBtn = ({ num, id }) => {
  const {
    displayOutput,
    setDisplayOutput,
    setFormulaOutput,
    equalStatus,
    setEqualStatus,
    showLimitMessage,
  } = useContext(calculationContext);

  const onClickHandler = () => {
    if (showLimitMessage()) return;
    if (equalStatus) {
      setEqualStatus(false);
      setDisplayOutput(num);
      setFormulaOutput(num);
      return;
    }
    if (SIGNS_ARR.includes(displayOutput)) {
      setDisplayOutput(num);
      setFormulaOutput((prev) => prev + num);
      return;
    }
    if (displayOutput === "0") {
      setDisplayOutput(num);
      setFormulaOutput(num);
      return;
    }
    setDisplayOutput((prev) => prev + num);
    setFormulaOutput((prev) => prev + num);
  };

  return (
    <CalcBtn id={id} onClickHandler={onClickHandler}>
      {num}
    </CalcBtn>
  );
};

export default NumberBtn;
