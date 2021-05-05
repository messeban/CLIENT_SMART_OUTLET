import React, { useEffect, useState } from "react";
import customAxios from "../util/axios";
import { Link } from "react-router-dom";
import "./locations.css";
function Outlets() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()
  useEffect(() => {
    customAxios.get("/outlets/").then(
      (result) => {
        console.log(result.data.outlets);
        setIsLoaded(true);
        setItems(result.data.outlets);
      },
      // Remarque : il faut gérer les erreurs ici plutôt que dans
      // un bloc catch() afin que nous n’avalions pas les exceptions
      // dues à de véritables bugs dans les composants.
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
