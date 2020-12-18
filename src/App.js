import React, { Component } from "react";
import classes from "./App.module.scss";
import { Route, Switch } from "react-router-dom";
import Feed from "./containers/Feed/Feed";
import Groups from "./containers/Groups/Groups";
import Progression from "./containers/Progression/Progression";
import Findpartner from "./containers/Findpartner/FindPartner";
import Layout from "./hoc/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/progression" component={Progression} />
            <Route path="/partner" component={Findpartner} />
            <Route path="/groups" component={Groups} />
            <Route path="/" exact component={Feed} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
