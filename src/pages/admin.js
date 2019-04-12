import React from 'react';
import { Admin as ReactAdmin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

class Admin extends React.Component {
  render() {
    return (
      <ReactAdmin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="users" list={ListGuesser} />
      </ReactAdmin>
    )
  }
}

export default Admin;
