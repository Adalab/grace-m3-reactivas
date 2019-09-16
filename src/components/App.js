import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Editor from './Editor';
import Landing from './Landing';

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

export default App;
