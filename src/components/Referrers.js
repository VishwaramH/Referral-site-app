import React, { useEffect, useState } from 'react';
import db from '../firebase';
import './Referrers.css';

function Referrers() {
  const [referrers, setReferrers] = useState([]);

  useEffect(() => {
    db.collection("referrals")
    .orderBy("name", "asc")
    .onSnapshot((snapshot) => setReferrers(snapshot.docs.map((doc) => doc.data())));
  });
  var value = 1;

  return (
    <div className="referrers">
      <h1>🤝Referrers🤝</h1>
      <div>
        {referrers.map((referrer) => (
          <div className="referrer_item">
            <p>➡Name: {referrer.referrerName} <button onClick={() => alert(`Rewards sent to the ${referrer.referrerName} successfully!`)} className="reward">Send reward</button></p>
            <p>➡EmailId: {referrer.referrerEmail}</p>
            <p>Number of referrals made: {++value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Referrers;
