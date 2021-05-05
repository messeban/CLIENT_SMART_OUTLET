import React, { useState } from "react";
import customAxios from "../util/axios";
import { useHistory, useParams } from "react-router-dom";

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Device:
          <input
            type="text"
            value={device}
            onChange={(e) => setDevice(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default AddOutlet;
