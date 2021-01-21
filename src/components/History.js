import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db from '../firebase';
import './History.css';

function History() {
  const user = useSelector(selectUser);
  const [referrals, setReferrals] = useState([]);

  var history = db.collection("referrals").orderBy("timestamp", "desc").where("referrerEmail", "==", user.email);
  useEffect(() => {
    history.onSnapshot((snapshot) => setReferrals(snapshot.docs.map((doc) => doc.data())));
  })
  return (
    <div className="referrals">
      <h1>Referral History</h1>
      <div className="referrals_history">
        {referrals.map((referral) => (
        <div className="referral">
          <p>🎉You referred <b>{referral.name}</b> successfully🎉</p>
          <h3>Details</h3>
          <p>Email: <b>{referral.email}</b></p>
          <p>Phone no: <b>{referral.number}</b></p>
          <p>Date and time: <b>{new Date(referral.timestamp?.toDate()).toString()}</b></p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default History;
