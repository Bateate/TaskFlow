import { useState } from "react";
import classes from "./Select.module.css";
import { SelectOption, SelectProps } from "../../../utils/interfaces/common.interface";



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
    <div className={classes.select}>
      <div className={classes.select__label}>{label}</div>
      <div className={classes.select__control} onClick={toggleDropdown}>
        <div className={classes.selected__value}>
          {selectedOption ? selectedOption.label : "Select an option"}
        </div>
        <div className={classes.arrow}>{isOpen ? "▲" : "▼"}</div>
      </div>
      {isOpen && (
        <ul className={classes.select__options}>
          {options.map((option) => (
            <li
              key={option.value}
              className={classes.select__option}
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
