  import React from 'react';
  import { withStyles } from '@material-ui/core/styles';
  import withRoot from '../withRoot';
  import SimpleLineChart from './components/chart/SimpleLineChart';
  import SimpleTable from './components/table/SimpleTable';
  import Sidebar from './components/sidebar/Sidebar';
  import Header from './components/header/Header';
  import { Route } from "react-router-dom";

  const styles = theme => ({
    root: {
      display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      height: '100vh',
      overflow: 'auto',
    },
  });

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
              <Route path="/" exact component={SimpleTable} />
              <Route path="/chart" component={SimpleLineChart} />
              <Route path="/table" component={SimpleTable} />
          </main>
        </div>
      );
    }
  }

  export default withRoot(withStyles(styles)(App));
