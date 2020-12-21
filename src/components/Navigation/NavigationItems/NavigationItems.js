import React from "react";
import classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";
import { FaHome } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { ImFinder } from "react-icons/im";
import { RiTeamFill } from "react-icons/ri";
const NavigationItems = (props) => {
  return (
    <ul className={classes.listnav}>
      <NavigationItem link="/" exact>
        <FaHome className={classes.icon} />
        Feed
      </NavigationItem>
      <NavigationItem link="/progression">
        <IoStatsChart className={classes.icon} />
        Progression
      </NavigationItem>
      <NavigationItem link="/partner">
        <ImFinder className={classes.icon} />
        Find Partner
      </NavigationItem>
      <NavigationItem link="/groups">
        <RiTeamFill className={classes.icon} />
        Groups
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
