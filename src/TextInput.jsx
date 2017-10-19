import React, { Component } from "react";
import classNames from "classnames";

const style = require("./TextInput.css");

const allowNumbersOnly = e => {
  var charCode = e.which || e.keyCode;

  if (charCode == 46 || (charCode >= 48 && charCode <= 57)) {
    return;
  }

  e.preventDefault();
};

class TextInput extends Component {
  handleChange = e => {
    const { onChange, numeric } = this.props;
    const { value } = e.target;

    if (numeric) {
      if (value === "") {
        onChange(undefined);
      } else {
        const number = parseFloat(e.target.value);

        if (isNaN(number)) {
          onChange(undefined);
        } else {
          onChange(number);
        }
      }
    } else {
      onChange(value);
    }
  };

  render() {
    const { label, value, numeric } = this.props;

    let text = value;

    if (numeric && this.input) {
      if (parseFloat(this.input.value) == value) {
        text = this.input.value;
      }
    }

    if (text == null) {
      text = "";
    }

    return (
      <div className={style.wrapper}>
        <div
          className={classNames(
            style.label,
            value != null && style.labelActive
          )}
        >
          {label}
        </div>
        <input
          className={style.input}
          ref={ref => {
            this.input = ref;
          }}
          onKeyPress={numeric && allowNumbersOnly}
          onChange={this.handleChange}
          value={text}
        />
      </div>
    );
  }
}

export default TextInput;
