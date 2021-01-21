import React, { useState }from 'react';
import db from '../firebase';
import './ReferFriend.css';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import emailjs from 'emailjs-com';
import firebase from 'firebase';

function ReferFriend() {
  const user = useSelector(selectUser);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var regNumber = /^\d{10}$/;
    var valid = true;
    if(name === '' || email === '' || number === '' ) {
      alert("Fields cannot be empty");
      valid = false;
    }
    if(!regName.test(name)) {
      alert("Invalid Name");
      valid = false;
    }
    if(!regEmail.test(email)) {
      alert("Invalid Email address");
      valid = false;
    }
    if(!regNumber.test(number)) {
      alert("Invalid Phone number");
      valid = false;
    }
    if(valid) {
      db.collection("referrals").add({
        name: name,
        email: email,
        number: number,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        referrerName: user.displayName,
        referrerEmail: user.email,
        referrerId: user.uid
      })
      .then(() => {
        emailjs.sendForm('gmail', 'referral-apptest', '.referral__form', "user_QaApGqXJOPhpwvvwfCpGy")
        .then((result) => {
          alert(`Referral Success! Email sent to ${email}`);
          alert("You earned one rupee!");
        }, (error) => {
          alert(error);
        });
      })
      .catch(() => alert("Error! Data not sent to the database"));
    }
    setName('');
    setEmail('');
    setNumber('');
  }
  return (
    <div className="refer">
      <form className="referral__form" id="form" onSubmit={handleSubmit}>
        <h1>Refer a friend</h1>
        <div><input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter the name" /></div>
        <div><input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter the email address"  name="email" /></div>
        <div><input type="text" value={number} onChange={e => setNumber(e.target.value)} placeholder="Enter the phone number" /></div>
        <input type="submit" value="Refer and Send email" className="button" />
      </form>
    </div>
  )
}

export default ReferFriend;