import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function RideOptions({ address }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // we needa implement the backend and use an api like axios or something
    // axios.get(`your-backend-url/options?address=${address}`)
    //  .then(response => setOptions(response.data))
    //  .catch(error => console.log(error))
  }, [address]);

  return (
    <div>
      <h1>Ride Options</h1>
      {options.map((option, index) => (
        <button key={index} className="button">
          {option.name}
        </button>
      ))}
    </div>
  );
}

export default RideOptions;
