import React, { useState } from "react";
import "./CustomizedRadioButton.css";

const CustomizedRadioButton = () => {
  const DELIVER = "Deliver";
  const PICK_UP = "Pick Up";
  const [selected, setSelected] = useState(DELIVER);

  return (
    <div className="toggle-wrapper">
      <div className="toggle-container">
        <input
          type="radio"
          id={DELIVER}
          name="option"
          checked={selected === DELIVER}
          onChange={() => setSelected(DELIVER)}
        />
        <label
          htmlFor={DELIVER}
          className={`toggle-label ${selected === DELIVER ? "selected" : ""}`}
        >
          {DELIVER}
        </label>

        <input
          type="radio"
          id={PICK_UP}
          name="option"
          checked={selected === PICK_UP}
          onChange={() => setSelected(PICK_UP)}
        />
        <label
          htmlFor={PICK_UP}
          className={`toggle-label ${selected === PICK_UP ? "selected" : ""}`}
        >
          {PICK_UP}
        </label>
      </div>
    </div>
  );
};

export default CustomizedRadioButton;
