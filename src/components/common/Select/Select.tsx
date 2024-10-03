
import { useState } from "react";
import "./Select.css";
import {
  SelectOption,
  SelectProps,
} from "../../../utils/interfaces/select.interface";


function Select({ options, label, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectOption = (option: SelectOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="select">
      <div className="select-label">{label}</div>
      <div className="select-control" onClick={toggleDropdown}>
        <div className="selected-value">
          {selectedOption ? selectedOption.label : "Select an option"}
        </div>
        <div className="arrow">{isOpen ? "▲" : "▼"}</div>
      </div>
      {isOpen && (
        <ul className="select-options">
          {options.map((option) => (
            <li
              key={option.value}
              className="select-option"
              onClick={() => handleSelectOption(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
