import React, { useState } from "react";
import CalcBtn from "./CalcBtn";
import Display from "./Display";

export const calculationContext = React.createContext();

export function Calculator() {
  const [displayOutput, setDisplayOutput] = useState("0");
  const [formulaOutput, setFormulaOutput] = useState("");
  const [equalStatus, setEqualStatus] = useState(false);

  return (
    <calculationContext.Provider
      value={{
        displayOutput,
        setDisplayOutput,
        formulaOutput,
        setFormulaOutput,
        equalStatus,
        setEqualStatus,
      }}
    >
      <div className="calcContainer">
        <div className="calcGrid">
          <Display />
          <CalcBtn className="btnRed" id="clear">
            AC
          </CalcBtn>
          <CalcBtn className="btnBlack" id="divide">
            /
          </CalcBtn>
          <CalcBtn className="btnBlack" id="multiply">
            *
          </CalcBtn>
          <CalcBtn id="seven">7</CalcBtn>
          <CalcBtn id="eight">8</CalcBtn>
          <CalcBtn id="nine">9</CalcBtn>
          <CalcBtn className="btnBlack" id="subtract">
            -
          </CalcBtn>
          <CalcBtn id="four">4</CalcBtn>
          <CalcBtn id="five">5</CalcBtn>
          <CalcBtn id="six">6</CalcBtn>
          <CalcBtn className="btnBlack" id="add">
            +
          </CalcBtn>
          <CalcBtn id="one">1</CalcBtn>
          <CalcBtn id="two">2</CalcBtn>
          <CalcBtn id="three">3</CalcBtn>
          <CalcBtn className="btnOrange" id="equals">
            =
          </CalcBtn>
          <CalcBtn id="zero">0</CalcBtn>
          <CalcBtn id="decimal">.</CalcBtn>
        </div>
      </div>
    </calculationContext.Provider>
  );
}
