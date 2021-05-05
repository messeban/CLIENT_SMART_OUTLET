import React, { useState } from "react";
import customAxios from "../util/axios";
import { useHistory } from "react-router-dom";

export function AddRoom(props) {
  const [name, setName] = useState("");

  let history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const id = localStorage.getItem("locationId")
    console.log(id);
    customAxios
      .post("/users/addRoom/" + id, { name })
      .then(function (response) {

        history.push("/rooms");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name of the room:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default AddRoom;
