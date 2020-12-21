import React, { Component } from "react";
import classes from "./Feed.module.scss";
import { FaHome } from "react-icons/fa";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
class Feed extends Component {
  render() {
    return (
      <Auxiliary>
        <div className={classes.Feed}>
          <p>
            <FaHome className={classes.Icon} />
            Feed
          </p>
          <p>papa</p>
          <p>papa</p>
          <p>papa</p>
          <p>papa</p>
          <p>papa</p>
          <p>papa</p>
          <p>papa</p>
          <p>papa</p>
        </div>
      </Auxiliary>
    );
  }
}

export default Feed;
