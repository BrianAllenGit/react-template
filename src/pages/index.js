import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from './admin';
import App from './app';

class Index extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/admin" component={Admin} />
          <Route component={App} />
        </Switch>
      </Router>
    );
  }
}

export default Index;
