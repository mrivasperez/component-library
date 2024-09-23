import { useEffect, useRef, useState } from "react";
import Panel from "./Panel";

export type DropdownOption = { label: string; value: string };
export type DropdownOptionList = DropdownOption[];

interface DropdownProps {
  options: DropdownOptionList;
  value: null | DropdownOption;
  onChange: (option: DropdownOption | null) => void;
}

const Dropdown = ({ options, value, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(event.target as Node)) {
        return setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    // cleanup
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

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
    <div className="w-48 relative" ref={dropdownRef}>
      <Panel
        className="flex justify-between items-center cursor-pointer  bg-white w-full"
        onClick={handleClick}
      >
        {value ? value.label : "Select..."}
        <span>⯆</span>
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full bg-white  w-full">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
};

export default Dropdown;
