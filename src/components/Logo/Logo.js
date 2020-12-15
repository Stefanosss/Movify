import React from "react";
import classes from "./Logo.module.scss";
import movifyLogo from "../../assets/Logo-movify.png";

const Logo = (props) => {
  return (
    <div className={classes.logo}>
      <img src={movifyLogo} alt="Movify Logo" />
    </div>
  );
};

export default Logo;
