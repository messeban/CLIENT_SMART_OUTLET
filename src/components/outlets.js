import React, { useEffect, useState } from "react";
import customAxios from "../util/axios";
import { Link } from "react-router-dom";
import "./locations.css";
function Outlets() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    customAxios.get("/outlets/").then(
      (result) => {
        console.log(result.data.outlets);
        setIsLoaded(true);
        setItems(result.data.outlets);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else if (items.length === 0) {
    return (
      <div>
        <h1>Outlets</h1>
        <h3>No Outlets</h3>
        <Link to="/add">Add Outlet</Link>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Outlets</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Device</th>
            <th>State</th>
            <th>isConnected</th>
            <th>locationId</th>
            <th>Room</th>
          </tr>

          {items.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.device}</td>
              <td>{item.state}</td>
              <td>{item.isConnected}</td>
              <td>{item.location.zipCode} {item.location.city}</td>
              <td>{item.room.name}</td>
            </tr>
          ))}
        </table>
        <Link to="/add">Add Outlet</Link>
      </div>
    );
  }
}
export default Outlets;