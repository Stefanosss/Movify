import React, { Component } from "react";
import classes from "./Feed.module.scss";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
class Feed extends Component {
  render() {
    return (
      <Auxiliary>
        <div className={classes.Feed}>
          <p>hahahaha</p>
        </div>
      </Auxiliary>
    );
  }
}

export default Feed;
