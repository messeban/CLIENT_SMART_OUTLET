
import React, { useState } from "react";
import customAxios from '../../util/axios';
import { useHistory } from "react-router-dom";
import { Button } from '../../components/Button/Button';

export function AddLocation(props) {
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  let history = useHistory();



  const handleSubmit = (evt) => {
    customAxios.post("/users/addLocation", { name,street, houseNumber, zipCode, city, country })
      .then(function (response) {
        localStorage.setItem('locationId', response.data);
        history.push('/add');
      })
      .catch(function (error) {
        console.log(error);
      });
    evt.preventDefault();

  }
  return (


    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Add Location</h1>
        <label>
          Name:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label>
          Street:</label>
        <input
          type="text"
          value={street}
          onChange={e => setStreet(e.target.value)}
        />
        <label>
          House Number:</label>
        <input
          type="number"
          value={houseNumber}
          onChange={e => setHouseNumber(e.target.value)}
        />
        <label>
          ZIP Code:</label>
        <input
          type="number"
          value={zipCode}
          onChange={e => setZipCode(e.target.value)}
        />
        <label>
          City:</label>
        <input
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <label>
          Country:</label>
        <input
          type="text"
          value={country}
          onChange={e => setCountry(e.target.value)}
        />
        <Button type='submit' buttonStyle='btn--outline'>LOGIN</Button>
      </form>
    </div>
  );
}
export default AddLocation;
