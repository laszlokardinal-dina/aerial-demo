import React from "react";
import classNames from "classnames";

import Slider from "react-slider";

import SizeDisplay from "./SizeDisplay.jsx";

const style = require("./SizeControl.css");

const allowIntegersOnly = e => {
  var charCode = e.which || e.keyCode;

  if (
    !((charCode >= 48 && charCode <= 57) || (charCode >= 96 && charCode <= 105))
  ) {
    e.preventDefault();
  }
};

const SizeControl = ({ deviceWidth, onDeviceWidthChange }) => {
  return (
    <div className={style.sizeControl}>
      <div className={style.row}>
        <Slider
          className={style.slider}
          handleClassName={style.sliderHandle}
          withBars
          max={window.innerWidth}
          defaultValue={deviceWidth}
          value={deviceWidth}
          onChange={onDeviceWidthChange}
        />
        <input
          className={style.input}
          onKeyPress={allowIntegersOnly}
          onChange={e => onDeviceWidthChange(parseInt(e.target.value) || 0)}
          value={deviceWidth}
        />
      </div>
      <div className={style.row}>
        <SizeDisplay />
      </div>
    </div>
  );
};

export default SizeControl;
