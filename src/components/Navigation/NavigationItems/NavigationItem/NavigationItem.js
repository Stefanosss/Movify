import React, { useEffect } from "react";

import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.scss";

const NavigationItem = (props) => {
  useEffect(() => {
    console.log(props.exact);
  }, []);

  return (
    <li>
      <NavLink to={props.link} exact={props.exact}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
