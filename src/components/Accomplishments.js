import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db from '../firebase';
import './Accomplishments.css';

function Accomplishments() {
  const user = useSelector(selectUser);
  useEffect(() => {
    db.collection("referrals").where("referrerEmail", "==", user.email).get().then((snap) => {
      console.log(snap.size);
      document.getElementById("size").innerHTML = snap.size;
    });
  });
  return (
      <div className="accomplishments">
        <h1>🏆Accomplishments🏆</h1>
        <h2>Total money earned: Rs. <span id="size"></span></h2>
        <p>You have earned a <b><i>Golden badge🥇</i></b></p>
        <p>You have received a new title: <b><em>"Referral King👑"</em></b></p>
        <p>You are an <b><i>Overachiever💪</i></b></p>
      </div>
    )
}

export default Accomplishments;