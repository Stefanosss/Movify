import classes from "./App.module.scss";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Feed from "./containers/Feed/Feed";
import Groups from "./containers/Groups/Groups";
import Layout from "./hoc/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/groups" component={Groups} />
            <Route path="/" exact component={Feed} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
