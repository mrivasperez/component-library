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

  const handleOpenDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: { label: string; value: string }) => {
    handleOpenDropdown();
    onChange(option);
  };

  const handleClearSelection = () => onChange(null);

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleSelectOption(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={handleOpenDropdown}>
        {value ? value.label : "Select..."}
      </div>
      {isOpen && (
        <div>
          {value && <div onClick={handleClearSelection}>Clear</div>}
          {renderedOptions}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
