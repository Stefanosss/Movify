import React, { Component } from "react";
import classes from "./Layout.module.scss";
import Sidenav from "../../components/Navigation/Sidenav/Sidenav";
import Auxiliary from "../Auxiliary/Auxiliary";
import Header from "../../components/Navigation/Header/Header";
class Layout extends Component {
  render() {
    return (
      <Auxiliary>
        <Header />
        <Sidenav />

        <main>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default Layout;
