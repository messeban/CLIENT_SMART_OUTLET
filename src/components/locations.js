import React, { useEffect, useState } from "react";
import customAxios from "../util/axios";
import { Link } from "react-router-dom";
import "./locations.css";
function Locations() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()
  useEffect(() => {
    customAxios.get("/users/locations").then(
      (result) => {
        console.log(result);
        setIsLoaded(true);
        setItems(result.data.locations);
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
        <h1>Locations</h1>
        <h3>No Locations</h3>
        <Link to="/add_location">Add Location</Link>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Locations</h1>
        <table>
          <tr>
            <th>Street</th>
            <th>House Number</th>
            <th>ZIP code</th>
            <th>City</th>
            <th>Country</th>
            <th>Link</th>
          </tr>

          {items.map((item) => (
            <tr>
              <td>{item.street}</td>
              <td>{item.houseNumber}</td>
              <td>{item.zipCode}</td>
              <td>{item.city}</td>
              <td>{item.country}</td>
              <td>
                <a href={"/rooms/" + item.id}>choose this</a>
              </td>
            </tr>
          ))}
        </table>
        <Link to="/add_location">Add Location</Link>
      </div>
    );
  }
}
export default Locations;
