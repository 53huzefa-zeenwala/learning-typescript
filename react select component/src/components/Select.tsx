import { useEffect, useState } from "react";
import styles from "./Select.module.css";

export type SelectOption = {
  label: string;
  value: string | number;
};

type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

type SingleSelectProps = {
  multiple: false;
  onChange: (value: SelectOption | undefined) => void;
  value?: SelectOption;
};

type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

function Select({ multiple, value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightingIndex, setHighlightingIndex] = useState(0);
  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }
  function selectOption(option: SelectOption) {
    if (multiple) {
        if (value.includes(option)) {
            onChange(value.filter(o => o !== option))
        } else onChange([...value, option])
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOptionSelected(option: SelectOption) {
    return multiple ? value.includes(option) : option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightingIndex(0);
  }, [isOpen]);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(false)}
      tabIndex={0}
      className={styles.container}
    >
      <span className={styles.value}>{multiple ? value.map(v => (
        <button key={v.value} onClick={e => {
            e.stopPropagation()
            selectOption(v)
        }} className={styles.optionBadge}>{v.label}
        <span className={styles.removesBtn}>&times;</span>
        </button>
      )) : value?.label}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
        className={styles.clearBtn}
      >
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option, i) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightingIndex(i)}
            className={`${styles.option} ${
              isOptionSelected(option) ? styles.selected : ""
            } ${highlightingIndex === i ? styles.highlighted : ""}`}
            key={option.value}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Select;
