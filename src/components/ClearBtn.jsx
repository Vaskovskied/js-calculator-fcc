import React, { useContext } from "react";
import CalcBtn from "./CalcBtn";
import { calculationContext } from "./Calculator";

const ClearBtn = () => {
  const { setDisplayOutput, setFormulaOutput, setEqualStatus } =
    useContext(calculationContext);

  const onClickHandler = () => {
    setFormulaOutput("");
    setDisplayOutput("0");
    setEqualStatus(false);
  };

  return (
    <CalcBtn className="btnRed" id="clear" onClickHandler={onClickHandler}>
      AC
    </CalcBtn>
  );
};

export default ClearBtn;
