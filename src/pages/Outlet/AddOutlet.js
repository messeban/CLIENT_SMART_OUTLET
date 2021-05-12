import React, { useState } from "react";
import customAxios from "../../util/axios";
import { useHistory, useParams } from "react-router-dom";
import { Button } from '../../components/Button/Button';

export function AddOutlet(props) {
  const [name, setName] = useState("");
  const [device, setDevice] = useState("Other");
  const [outletId, setOutletId] = useState(null);

  let history = useHistory();
  const locationId = localStorage.getItem("locationId");
  const { roomId } = useParams();
  const handleSubmit = (evt) => {
    customAxios
      .post("/outlets/newOutlet", { name, device, locationId, roomId, outletId })
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
        <h1>Add Outlet</h1>

        <label>
          Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>
          Device:</label>
          <select name="devices" id="devices" value={device} onChange={(e) => setDevice(e.target.value)}>
          <option value="TV">TV</option>
          <option value="Computer">Computer</option>
          <option value="Fridge">Fridge</option>
          <option value="Dryer">Dryer</option>
          <option value="Other">Other</option>
        </select>
        <label>
          Outlet ID(ID is written on the box):</label>
        <input
          type="number"
          value={outletId}
          onChange={(e) => setOutletId(e.target.value)}
        />
        <Button type='submit' buttonStyle='btn--outline'>Add Outlet</Button>      </form>
    </div>
  );
}
export default AddOutlet;
