import React from 'react';
import SimpleLineChart from './../chart/SimpleLineChart';
import SimpleTable from './../table/SimpleTable';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SimpleLineChart />
        <SimpleTable />
      </div>
    );
  }
}

export default Home;
