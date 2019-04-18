import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import { Route } from "react-router-dom";
import styles from './appStyles';

class App extends React.Component {
  state = {
    open: true,
  };

  handleDrawerClose = () => {
    this.setState({
      open: false,
    });
  };

  handleDrawerOpen = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <Header
          open={this.state.open}
          handleDrawerOpen={this.handleDrawerOpen} />

        <Sidebar
          open={this.state.open}
          handleDrawerClose={this.handleDrawerClose} />

        <main className={this.props.classes.content}>
          <div className={this.props.classes.appBarSpacer} />
            <Route path="/" exact component={Home}/>
        </main>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
