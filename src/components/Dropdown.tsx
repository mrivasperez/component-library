import { useState } from "react";

export type DropdownOption = { label: string; value: string };
export type DropdownOptionList = DropdownOption[];

interface DropdownProps {
  options: DropdownOptionList;
  value: null | DropdownOption;
  onChange: (option: DropdownOption | null) => void;
}

const Dropdown = ({ options, value, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: { label: string; value: string }) => {
    handleClick();
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleSelectOption(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-2 shadow bg-white w-full"
        onClick={handleClick}
      >
        {value ? value.label : "Select..."}
        <span>⯆</span>
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-2 bg-white shadow w-full">
          {renderedOptions}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
