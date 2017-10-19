import React from "react";

const style = require("./Card.css");

const Card = ({ children }) => <div className={style.card}>{children}</div>;

export default Card;
