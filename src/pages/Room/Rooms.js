import React, { useEffect, useState } from "react";
import customAxios from "../../util/axios";
import { Link, useParams } from "react-router-dom";
import "../Location/Locations.css";
function Rooms() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()

    const {id} = useParams();

  useEffect(() => {
    localStorage.setItem("locationId", id);
    customAxios.get("/users/rooms/" + id).then(
      (result) => {
        console.log(result);
        setIsLoaded(true);
        setItems(result.data.rooms);
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
    return <div className='container'>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else if (items.length == 0) {
    return (
      <div className='container'>
        <h1>Rooms</h1>
        <h3>No Rooms</h3>
        <Link to="/add_rooms">Add Rooms</Link>
      </div>
    );
  } else {
    return (
      <div className='container'>
        <h1>Rooms</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Device</th>
            <th>Link</th>
          </tr>

          {items.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.device}</td>
              <td>
                <a href={"/add_outlet/" + item.id}>choose this</a>
              </td>
            </tr>
          ))}
        </table>
        <Link to="/add_room">Add Room</Link>
      </div>
    );
  }
}
export default Rooms;
