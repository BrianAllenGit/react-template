import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const data = [
  { name: 'Mon', Visits: 2200, Orders: 3400 },
  { name: 'Tue', Visits: 1280, Orders: 2398 },
  { name: 'Wed', Visits: 5000, Orders: 4300 },
  { name: 'Thu', Visits: 4780, Orders: 2908 },
  { name: 'Fri', Visits: 5890, Orders: 4800 },
  { name: 'Sat', Visits: 4390, Orders: 3800 },
  { name: 'Sun', Visits: 4490, Orders: 4300 },
];

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
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

function SimpleLineChart(props) {
  const { classes } = props;

  return (
    <div>
      <Typography variant="h4" gutterBottom component="h2">
        Orders
      </Typography>
      <Typography component="div" className={classes.chartContainer}>
        <ResponsiveContainer width="99%" height={320}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Visits" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Orders" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </Typography>
    </div>
  );
}

export default withStyles(styles)(SimpleLineChart);