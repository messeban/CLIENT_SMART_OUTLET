import React, { useState } from "react";
import customAxios from "../../util/axios";
import { useHistory, useParams } from "react-router-dom";
import {Button} from '../../components/Button/Button';

export function AddOutlet(props) {
  const [name, setName] = useState("");
  const [device, setDevice] = useState("");

  let history = useHistory();
  const locationId = localStorage.getItem("locationId");
    const {roomId} = useParams();
  const handleSubmit = (evt) => {
    customAxios
      .post("/outlets/newOutlet", { name, device, locationId, roomId })
      .then(function (response) {
        localStorage.removeItem("locationId");
        history.push("/outlets");
      })
      .catch(function (error) {
        console.log(error);
      });
    evt.preventDefault();
  };
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <label>
          Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        <label>
          Device:</label>
          <input
            type="text"
            value={device}
            onChange={(e) => setDevice(e.target.value)}
          />
<Button type='submit' buttonStyle='btn--outline'>LOGIN</Button>      </form>
    </div>
  );
}
export default AddOutlet;
