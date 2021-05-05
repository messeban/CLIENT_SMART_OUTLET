
import React, { useState } from "react";
import customAxios from '../util/axios';
import { useHistory } from "react-router-dom";

export function AddLocation(props) {
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  let history = useHistory();



  const handleSubmit = (evt) => {
      customAxios.post("/users/addLocation", {street, houseNumber, zipCode, city, country})
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


    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Street:
        <input
          type="text"
          value={street}
          onChange={e => setStreet(e.target.value)}
        />
      </label>
      <label>
        House Number:
        <input
          type="number"
          value={houseNumber}
          onChange={e => setHouseNumber(e.target.value)}
        />
      </label>
      <label>
        ZIP Code:
        <input
          type="number"
          value={zipCode}
          onChange={e => setZipCode(e.target.value)}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
      </label>
      <label>
        Country:
        <input
          type="text"
          value={country}
          onChange={e => setCountry(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}
export default AddLocation;
