import React, { useEffect, useState } from "react";
import customAxios from '../../util/axios';
import { Link } from "react-router-dom";
import "../Location/Locations.css";
import tv from './png/052-television.png';
import computer from './png/desktop.png';
import fridge from "./png/053-fridge-1.png";
import dryer from "./png/041-dryer.png";
import other from "./png/014-idea.png"
import {Button} from '../../components/Button/Button';
function Outlets() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  function sayHello(index, item){
    let elements = [...items];
    let element = {...elements[index]};
    element.isConnected = !element.isConnected;
    elements[index] = element;
    setItems(elements);

    customAxios
    .post("/outlets/"+element.id+"/switch", { isConnected: element.isConnected })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  const checkImage = (image) => {
    if (image === 'TV') {
      return <img src={tv} alt="TV" width="100" height="100"></img>;
    }
    else if (image === 'Computer') {
      return <img src={computer} alt="Computer" width="100" height="100"></img>;
    }
    else if (image === 'Fridge') {
      return <img src={fridge} alt="Fridge" width="100" height="100"></img>;
    }
    else if (image === 'Dryer') {
      return <img src={dryer} alt="Dryer" width="100" height="100"></img>;
    }
    else {
      return <img src={other} alt="Other" width="100" height="100"></img>;

    }
  }

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
      <div className='container'>
        <h1>Outlets</h1>
        <h3>No Outlets</h3>
        <Link to="/add">Add Outlet</Link>
      </div>
    );
  } else {
    return (
      <div className='container'>
        <h1>Outlets</h1>

        <div className="container--cards">

          {items.map((item,index) => (

          <div className="card--outlet">
            <div className="img--container">
              {checkImage(item.device)}
            </div>
            <h1>{item.name}</h1>
            <p>Device: {item.device}</p>
            <p>Location: {item.location.name}</p>
            <p>Room: {item.room.name}</p>
            <p>State: {item.state}</p>
            <label class="switch">
              <input type="checkbox" checked={item.isConnected} onClick={()=>sayHello(index, item)}/>
                 <span class="slider round"></span>
            </label>
            <Link to={"/graph/"+item.id}><Button buttonStyle='btn--outline'>Graph</Button></Link>
          </div>
          ))}
            <div className="card--outlet">
            <Link to="/add"><Button buttonStyle='btn--outline'>Add Outlet</Button></Link>
            </div>
        </div>
      </div>
    );
  }
}
export default Outlets;