import React, { useState } from "react";
import ClearBtn from "./ClearBtn";
import DotBtn from "./DotBtn";
import Display from "./Display";
import { DIGITS_DATA, LIMIT_PHRASE, SIGNS_DATA } from "../static/static";
import NumberBtn from "./NumberBtn";
import EqualBtn from "./EqualBtn";
import SignBtn from "./SignBtn";

export const calculationContext = React.createContext();

export function Calculator() {
  const [displayOutput, setDisplayOutput] = useState("0");
  const [formulaOutput, setFormulaOutput] = useState("");
  const [equalStatus, setEqualStatus] = useState(false);

  const showLimitMessage = () => {
    const DIGIT_LIMIT = 16;
    // show limit message on 16 digits
    // if digit limit was reached returns true
    // else returns false
    if (displayOutput === LIMIT_PHRASE) return true;
    if (displayOutput.length >= DIGIT_LIMIT) {
      const prevDisplayOutput = displayOutput;
      setDisplayOutput(LIMIT_PHRASE);
      setTimeout(() => {
        setDisplayOutput(prevDisplayOutput);
      }, 500);
      return true;
    }
    return false;
  };

  return (
    <calculationContext.Provider
      value={{
        displayOutput,
        setDisplayOutput,
        formulaOutput,
        setFormulaOutput,
        equalStatus,
        setEqualStatus,
        showLimitMessage,
      }}
    >
      <div className="calcContainer">
        <div className="calcGrid">
          <Display />
          <ClearBtn />
          {DIGITS_DATA.map((item) => (
            <NumberBtn id={item.id} num={item.num} key={item.id} />
          ))}
          <DotBtn />
          {SIGNS_DATA.map((item) => {
            return <SignBtn key={item.id} sign={item.sign} id={item.id} />;
          })}
          <EqualBtn />
        </div>
      </div>
    </calculationContext.Provider>
  );
}
