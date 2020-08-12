import React from "react";
import classnames from "classnames";

import "./estilos.scss";

const SassButton = props => {
  const { children, flat, small, large } = props;
  const classes = classnames(
    "sass-button",
    { flat: flat },
    { small: small },
    { large: large }
  );
  return <button className={classes}>{children}</button>;
};

export default SassButton;
