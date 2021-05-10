import React, { useState } from "react";
import customAxios from '../../util/axios';
import { useHistory } from "react-router-dom";
import {Button} from '../../components/Button/Button';

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
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label>
          First Name:</label>
        <input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        
        <label>
          Last Name:</label>
        <input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        
        <label>
          Date Of Birth:</label>
        <input
            type="date"
            value={dateOfBirth}
            onChange={e => setDateOfBirth(e.target.value)}
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
        
        <Button type='submit' buttonStyle='btn--outline'>SIGN UP</Button>
              </form>
    </div>
    
  );
}
export default SignUp;
