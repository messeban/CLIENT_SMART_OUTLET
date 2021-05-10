import React, { useState } from "react";
import customAxios from "../../util/axios";
import { useHistory } from "react-router-dom";
import {Button} from '../../components/Button/Button';

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
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <label>
          Name of the room:</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

<Button type='submit' buttonStyle='btn--outline'>LOGIN</Button> 
      </form>
    </div>
  );
}
export default AddRoom;
