import React from "react";
import classes from "./Header.module.scss";
import Logo from "../../Logo/Logo";
const header = (props) => {
  return (
    <header className={classes.header}>
      <Logo />
      <p className={classes.header_profilename}>Stefanos Stoikos</p>
    </header>
  );
};

export default header;
