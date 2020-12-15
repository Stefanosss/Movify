import React from "react";
import classes from "./Layout.module.scss";
import NavigationItems from "../../components/Navigation/NavigationItems/NavigationItems";
import Logo from "../../components/Logo/Logo";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Logo />
      <NavigationItems />
    </React.Fragment>
  );
};

export default Layout;
