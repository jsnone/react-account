import React from "react";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Tags from "views/tags/tags";
import { Tag } from "views/tags/tag";
import Money from "views/Money/Index";
import Statistics from "views/Statistics";
import NoMatch from "views/NoMatch";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/tags">
          <Tags />
        </Route>
        <Route exact path="/tag/:tagId">
          <Tag />
        </Route>
        <Route exact path="/money">
          <Money />
        </Route>
        <Route exact path="/statistics">
          <Statistics />
        </Route>
        <Redirect exact from="/" to="money" />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}
