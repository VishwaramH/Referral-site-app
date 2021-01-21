import React from 'react';
import './UserHeader.css';
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase';
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function UserHeader() {
  const user = useSelector(selectUser);
    return(
      <div className="navbar">
        <div className="topnav" id="myTopnav">
          <NavLink to="/referfriend"><i className="fa fa-users"></i> Refer a Friend</NavLink>
          <NavLink to="/history"><i className="fa fa-history"></i> History</NavLink>
          <NavLink to="/accomplishments"><i className="fa fa-trophy"></i> Accomplishments</NavLink>
          <button className="username" onClick={() => auth.signOut()
            .then(() => alert("User logged out successfully!"))
            .catch(() => alert("Error logging out the user!"))}>{user.displayName} <ExitToAppIcon /></button>
        </div>
      </div>
    )
}

export default UserHeader;