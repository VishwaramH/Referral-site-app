import React from 'react';
import './AdminHeader.css';
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import AssessmentSharpIcon from '@material-ui/icons/AssessmentSharp';
import PeopleIcon from '@material-ui/icons/People';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function AdminHeader() {
  const user = useSelector(selectUser);
    return(
      <div className="navbar">
        <div className="topnav" id="myTopnav">
          <NavLink to="/referrers"><PeopleIcon /> Referrers</NavLink>
          <NavLink to="/analytics"><AssessmentSharpIcon /> Analytics</NavLink>
          <button className="username" onClick={() => auth.signOut()
            .then(() => alert("Admin logged out successfully!"))
            .catch(() => alert("Error in logging out the admin!"))}>{user.displayName} <ExitToAppIcon /> </button>
        </div>
      </div>
    )
}

export default AdminHeader;