import React, { useContext, useState } from "react";
import { calculationContext } from "./Calculator";
import { create, all } from "mathjs";

const signsArr = ["+", "-", "*", "/"];
const limitPhrase = "DIGIT LIMIT";

const math = create(all, {
  number: "BigNumber",
  precision: 16,
});
const evaluate = (smth) => math.evaluate(smth).toString();

function CalcBtn({ children, id, className }) {
  const {
    displayOutput,
    setDisplayOutput,
    formulaOutput,
    setFormulaOutput,
    equalStatus,
    setEqualStatus,
  } = useContext(calculationContext);

  const [isBtnAnim, setBtnAnim] = useState(false);

  const animateBtn = () => {
    setBtnAnim(true);
    if (setBtnAnim) {
      setTimeout(() => {
        setBtnAnim(false);
      }, 250);
    }
  };

  const clickHandler = (e) => {
    const btnText = e.target.innerText;
    animateBtn();
    if (btnText === "=") {
      if (equalStatus || signsArr.includes(displayOutput)) {
        return;
      }
      setEqualStatus(true);
      setDisplayOutput(evaluate(formulaOutput));
      setFormulaOutput((prev) => prev + "=");
      return;
    }

    if (btnText === "AC") {
      setFormulaOutput("");
      setDisplayOutput("0");
      setEqualStatus(false);
      return;
    }

    if (
      (displayOutput.length >= 16 || displayOutput === limitPhrase) &&
      (Number.isInteger(+btnText) || btnText === ".")
    ) {
      const prevDisplayOutput = displayOutput;
      if (prevDisplayOutput === limitPhrase) {
        return;
      }
      setDisplayOutput(limitPhrase);
      setTimeout(() => {
        setDisplayOutput(prevDisplayOutput);
      }, 500);
      return;
    }

    if (btnText === ".") {
      if (equalStatus) {
        setEqualStatus(false);
        setDisplayOutput("0.");
        setFormulaOutput("0.");
        return;
      }
      if (displayOutput.includes(btnText)) {
        return;
      }
      if (signsArr.includes(displayOutput)) {
        setDisplayOutput("0.");
        setFormulaOutput((prev) => prev + "0.");
        return;
      }
      if (displayOutput === "0")
        if (signsArr.includes(displayOutput)) {
          setDisplayOutput((prev) => prev + "0.");
          setFormulaOutput((prev) => prev + "0.");
          return;
        }
      if (displayOutput === "") {
        setDisplayOutput((prev) => prev + "0.");
        setFormulaOutput((prev) => prev + "0.");
        return;
      }
      if (displayOutput === "0" && formulaOutput === "") {
        setFormulaOutput((prev) => prev + "0");
      }
      setDisplayOutput((prev) => prev + ".");
      setFormulaOutput((prev) => prev + ".");
    }

    if (Number.isInteger(+btnText)) {
      if (equalStatus) {
        setEqualStatus(false);
        setDisplayOutput(btnText);
        setFormulaOutput(btnText);
        return;
      }
      if (signsArr.includes(displayOutput)) {
        setDisplayOutput(btnText);
        setFormulaOutput((prev) => prev + btnText);
        return;
      }
      if (displayOutput === "0") {
        setDisplayOutput(btnText);
        setFormulaOutput(btnText);
        return;
      }
      setDisplayOutput((prev) => prev + btnText);
      setFormulaOutput((prev) => prev + btnText);
    }

    if (signsArr.includes(btnText)) {
      if (equalStatus) {
        setEqualStatus(false);
        setDisplayOutput(btnText);
        setFormulaOutput(
          evaluate(formulaOutput.slice(0, formulaOutput.lastIndexOf("="))) +
            btnText
        );
        return;
      }
      if (
        signsArr.includes(formulaOutput.slice(-2, -1)) &&
        displayOutput === "-"
      ) {
        setDisplayOutput(btnText);
        setFormulaOutput((prev) => prev.slice(0, -2) + btnText);
      }
      if (btnText === displayOutput) {
        return;
      }
      if (signsArr.includes(displayOutput) && btnText !== "-") {
        setDisplayOutput(btnText);
        setFormulaOutput((prev) => prev.slice(0, -1) + btnText);
        return;
      }
      setDisplayOutput(btnText);
      setFormulaOutput((prev) => prev + btnText);
    }
  };

  return (
    <button
      className={`calcBtn${className ? " " + className : ""}${
        isBtnAnim ? " btnClicked" : ""
      }`}
      id={id}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}

export default CalcBtn;
