import React, { Component } from "react";
import classes from "./Feed.module.scss";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
class Feed extends Component {
  componentDidMount() {
    this.props.onFetchFriends();
  }

  render() {
    let orders = this.props.friends.map((el) => {
      return (
        <div key={el.age}>
          <p>Name: {el.name}</p>
          <p>Age: {el.age}</p>
          <br />
        </div>
      );
    });

    return (
      <Auxiliary>
        <div className={classes.Feed}>{orders}</div>
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.feed.friends,
    loading: state.feed.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchFriends: () => dispatch(actions.fetchFriends()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
