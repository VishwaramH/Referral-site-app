import React from 'react';
import AdminHeader from './AdminHeader';
import { Switch, Route } from 'react-router-dom';
import Referrers from './Referrers';
import Analytics from './Analytics';

class AdminHome extends React.Component {
  
  componentDidMount() {
    alert("Logged in as an admin successfully");
  }
  render() {
    return (
      <div>
        <AdminHeader />
        <Switch>
          <Route path="/referrers" component={Referrers} />
          <Route path="/analytics" component={Analytics} />
        </Switch>
      </div>
    )
  }
}

export default AdminHome;
