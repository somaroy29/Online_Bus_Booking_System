import React, { useState } from 'react';
import './styles/busSelection.css';

export const DetailsPopup = ({ details, onDetailsSubmit }) => {
  const [firstName, setFirstName] = useState(details?.firstName || '');
  const [lastName, setLastName] = useState(details?.firstName || '');
  const [email, setEmail] = useState(details?.email || '');
  // const [gender, setGender] = useState(details?.gender || '');

  const handleSubmit = () => {
    if(firstName && lastName && email)
      onDetailsSubmit({ firstName, lastName, email });
  };

  return (
    <div className="details-popup">
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        onClick={(e) => e.stopPropagation()}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        onClick={(e) => e.stopPropagation()}
      />
      {/* <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => {
          const inputValue = parseInt(e.target.value, 10);
          setAge(inputValue > 0 ? inputValue : '');
        }}
        onClick={(e) => e.stopPropagation()}
      /> */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onClick={(e) => e.stopPropagation()}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default DetailsPopup;
