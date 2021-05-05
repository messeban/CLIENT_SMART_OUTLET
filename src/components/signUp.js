import React, { useState } from "react";
import customAxios from '../util/axios';
import { useHistory } from "react-router-dom";

export function SignUp(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  let history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    customAxios.post("/users/create", { firstName, lastName, dateOfBirth, street, houseNumber, zipCode, city, country })
      .then(function (response) {

        localStorage.setItem('personalId', response.data.personalId);
        history.push('/credentials');
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
        <input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
        <input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </label>
        <label>
          Date Of Birth:
        <input
            type="date"
            value={dateOfBirth}
            onChange={e => setDateOfBirth(e.target.value)}
          />
        </label>
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
export default SignUp;
