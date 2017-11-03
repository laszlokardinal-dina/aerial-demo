import React, { Component } from "react";
import classNames from "classnames";

import Slider from "react-slider";
import throttle from "lodash.throttle";

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

class SizeControl extends Component {
  componentDidMount() {
    setTimeout(() => this.forceUpdate());
  }

  handleDeviceWidthChange = throttle(
    value => this.props.onDeviceWidthChange(value),
    16
  );

  render() {
    const { deviceWidth, onDeviceWidthChange } = this.props;

    return (
      <div className={style.sizeControl}>
        <div className={style.row}>
          <Slider
            className={style.slider}
            handleClassName={style.sliderHandle}
            withBars
            max={Math.max(window.innerWidth, 1920)}
            defaultValue={deviceWidth}
            value={deviceWidth}
            onChange={this.handleDeviceWidthChange}
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
  }
}

export default SizeControl;
