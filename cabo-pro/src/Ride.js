import React, { useState } from 'react';

function Ride() {
  const [address, setAddress] = useState("");
  const [isValid, setIsValid] = useState(false);

  function handleAddressChange(event) {
    setAddress(event.target.value);
    setIsValid(event.target.value.length > 0);
  }

  function handleAddressSubmit(event) {
    event.preventDefault();
  
    console.log(address);
  }

  return (
    <form onSubmit={handleAddressSubmit}>
      <label>
        Destination:
        <input type="text" value={address} onChange={handleAddressChange} />
      </label>
      <button type="submit" disabled={!isValid}>Submit</button>
    </form>
  );
}

export default Ride;
