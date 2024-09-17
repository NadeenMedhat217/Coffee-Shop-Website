import React, { useState } from "react";
import "./CustomizedRadioButton.css";

const CustomizedRadioButton = () => {
  const [selected, setSelected] = useState("deliver");

  return (
    <div className="toggle-wrapper">
      <div className="toggle-container">
        <input
          type="radio"
          id="deliver"
          name="option"
          checked={selected === "deliver"}
          onChange={() => setSelected("deliver")}
        />
        <label
          htmlFor="deliver"
          className={`toggle-label ${selected === "deliver" ? "selected" : ""}`}
        >
          Deliver
        </label>

        <input
          type="radio"
          id="pickup"
          name="option"
          checked={selected === "pickup"}
          onChange={() => setSelected("pickup")}
        />
        <label
          htmlFor="pickup"
          className={`toggle-label ${selected === "pickup" ? "selected" : ""}`}
        >
          Pick Up
        </label>
      </div>
    </div>
  );
};

export default CustomizedRadioButton;
