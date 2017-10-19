import React from "react";
import classNames from "classnames";

const style = require("./SelectInput.css");

const SelectInput = ({ label, value, onChange, options }) => (
  <div className={style.wrapper}>
    <div
      className={classNames(style.label, value != null && style.labelActive)}
    >
      {label}
    </div>
    <select
      className={style.input}
      onChange={e => onChange(e.target.value || undefined)}
      value={value}
      placeholder={value === undefined ? "undefined" : null}
    >
      {options.map(({ name, value }) => (
        <option key={name} value={value}>
          {name}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;
