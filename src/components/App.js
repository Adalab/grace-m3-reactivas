import React from "react";
import { Route, Switch } from "react-router-dom";
import Editor from "./Editor";
import Landing from "./Landing";
import PropTypes from "prop-types";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/editor" component={Editor} />
      </Switch>
    );
  }
}

App.propTypes = {
  Landing: PropTypes.element,
  Editor: PropTypes.element
};

export default App;
