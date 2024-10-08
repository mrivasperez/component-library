import React, { useState } from "react";
import Dropdown, { DropdownOption, DropdownOptionList } from "./Dropdown";

const DropdownPage = () => {
  const [selection, setSelection] = useState<null | DropdownOption>(null);

  const handleSelect = (option: DropdownOption | null) => {
    return setSelection(option);
  };

  const options: DropdownOptionList = [
    { label: "Red", value: "red" },
    { label: "Yellow", value: "yellow" },
    { label: "Blue", value: "blue" }
  ];

  return (
    <Dropdown options={options} value={selection} onChange={handleSelect} />
  );
};

export default DropdownPage;
