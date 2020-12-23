import React from "react";

import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.scss";

const NavigationItem = (props) => {
  return (
    <li className={classes.navItem}>
      <NavLink to={props.link} exact={props.exact} activeClassName={classes.active} className={classes.link}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
