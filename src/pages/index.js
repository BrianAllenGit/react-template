import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Admin from './admin';
import App from './app';
import Login from './components/login/Login';
import Register from './components/register/Register';

class Index extends React.Component {
  requireAuth = () => {
    // Add real authentication when we determine packages.
    let authenticated = true

    return authenticated;
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/login"  component={Login}/>
          <Route exact path="/register"  component={Register}/>
          <Route  path="/" render={(props) => (
            this.requireAuth() ? (
              <App {...props} />
            ) : (
              <Redirect to="/login"/>
            )
          )}/>
        </Switch>
      </Router>
    );
  }
}

export default Index;
