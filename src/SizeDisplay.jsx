import React from "react";

import classNames from "classnames";

import { withScreenDetails } from "react-aerial";

const style = require("./SizeDisplay.css");

const SizeDisplay = ({ screenDetails: { breakpoints } }) => (
  <div className={style.sizeDisplay}>
    {breakpoints.map(({ size, active }) => (
      <div
        key={size}
        className={classNames(style.size, active && style.sizeActive)}
      >
        {size}
      </div>
    ))}
  </div>
);

const SizeDisplayWithScreenDetails = withScreenDetails(SizeDisplay);

export default SizeDisplayWithScreenDetails;
