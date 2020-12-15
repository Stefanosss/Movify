import React from "react";
import classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => {
  return (
    <ul className={classes.nav}>
      <NavigationItem link="/" exact>
        Feed
      </NavigationItem>
      <NavigationItem link="/progression">Progression</NavigationItem>
      <NavigationItem link="/partner">Find Partner</NavigationItem>
      <NavigationItem link="/groups">Groups ok herereeee</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
