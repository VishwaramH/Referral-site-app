import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AdminHome from './components/AdminHome';
import Login from './components/Login';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import UserHome from './components/UserHome';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log(authUser);
      if(authUser) {
        // the user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            photo: authUser.photoURL,
            displayName: authUser.displayName
          })
        )
      }
      else {
        // the user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return(
    <BrowserRouter>
      <div className="App">
        {(user) ? (
          (user.email === "referraltestapp@gmail.com" && user.uid === "PaKZcPOi1ZV73ZqxHpxX2jvKIhS2") ? (
            <AdminHome />
          ) : (
            <UserHome />
          )
          ) : (
            <Login />
          )
        }
      </div>
    </BrowserRouter>

  )
}

export default App;
