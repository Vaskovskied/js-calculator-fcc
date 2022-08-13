import React, { useState } from "react";

const CalcBtn = ({ children, id, className, onClickHandler }) => {
  const [isBtnAnim, setBtnAnim] = useState(false);

  const animateBtn = () => {
    setBtnAnim(true);
    if (setBtnAnim) {
      setTimeout(() => {
        setBtnAnim(false);
      }, 250);
    }
  };

  return (
    <button
      className={`calcBtn${className ? " " + className : ""}${
        isBtnAnim ? " btnClicked" : ""
      }`}
      id={id}
      onClick={() => {
        animateBtn();
        onClickHandler();
      }}
    >
      {children}
    </button>
  );
};

export default CalcBtn;
