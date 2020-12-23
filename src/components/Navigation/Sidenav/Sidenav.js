import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";

import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import classes from "./Sidenav.module.scss";
const sidenav = (props) => {
  return (
    <Auxiliary>
      <nav className={classes.sidenav}>
        <NavigationItems />
      </nav>
    </Auxiliary>
  );
};

export default sidenav;
