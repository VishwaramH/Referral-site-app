import React from 'react';
import UserHeader from './UserHeader';
import { Route, Switch } from 'react-router-dom';
import ReferFriend from './ReferFriend';
import History from './History';
import Accomplishments from './Accomplishments';


class UserHome extends React.Component {

  componentDidMount() {
    alert("Logged in as a user successfully");
  }
  render() {
    return (
      <div>
        <UserHeader />
        <Switch>
          <Route path="/referfriend" component={ReferFriend} />
          <Route path="/history" component={History} />
          <Route path="/accomplishments" component={Accomplishments} />
        </Switch>
      </div>
    )
  }
}

export default UserHome;
