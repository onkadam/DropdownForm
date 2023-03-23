import "./styles.css";

import React, { useState } from "react";

function DropdownForm() {
  const [selectedNumber, setSelectedNumber] = useState("");
  const [options, setOptions] = useState([]);

  const handleDropdown1Change = (event) => {
    const selectedValue = event.target.value;
    setSelectedNumber(selectedValue);
    // Generate options for dropdown2 based on selectedValue
    const newOptions = [];
    for (let i = parseInt(selectedValue) + 1; i <= 10; i++) {
      newOptions.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    setOptions(newOptions);
  };

  return (
    <div>
      <label htmlFor="dropdown1">Dropdown 1: </label>
      <select
        id="dropdown1"
        value={selectedNumber}
        onChange={handleDropdown1Change}
      >
        <option value="">Select a number</option>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>

      <label htmlFor="dropdown2">Dropdown 2: </label>
      <select id="dropdown2" disabled={!selectedNumber}>
        <option value="">Select a number</option>
        {options}
      </select>
    </div>
  );
}
export default DropdownForm;
