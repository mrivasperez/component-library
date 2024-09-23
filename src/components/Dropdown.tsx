import { useState } from "react";
export type DropdownOption = { label: string; value: string };
export type DropdownOptionList = DropdownOption[];

interface DropdownProps {
  options: DropdownOptionList;
  selection: null | DropdownOption;
  onSelect: (option: DropdownOption | null) => void;
}

const Dropdown = ({ options, selection, onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: { label: string; value: string }) => {
    handleOpenDropdown();
    onSelect(option);
  };

  const handleClearSelection = () => onSelect(null);

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
        {selection ? selection.label : "Select..."}
      </div>
      {isOpen && (
        <div>
          {selection && <div onClick={handleClearSelection}>Clear</div>}
          {renderedOptions}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
