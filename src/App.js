import React from "react";

import "./App.css";

import Login from "./components/login";
import SignUp from "./components/signUp";
import Credentials from "./components/credentials";
import Locations from "./components/locations";
import AddRoom from "./components/addRoom";
import AddLocation from "./components/addLocation";
import AddOutlet from "./components/addOutlet";
import Outlets from "./components/outlets";
import Rooms from "./components/rooms";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import customAxios from "./util/axios";

const handleClick = (evt) => {
  evt.preventDefault();
  const token = localStorage.getItem("refreshToken");
  customAxios
    .post("/users/logout", { token })
    .then(function (response) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.setItem("LoggedIn", false);
      window.location.reload();
    })
    .catch(function (error) {
      console.log(error);
    });
};


function App() {
  const logged = localStorage.getItem("LoggedIn");

    return (
      <div className="App">
        <Router>
          <Navbar/>
              <Switch>
              
              <Route exact={true} path="/add" component={Locations} />
              <Route
                exact={true}
                path="/add_location"
                component={AddLocation}
              />
              <Route path="/add_outlet/:roomId" component={AddOutlet} />
              <Route exact={true} path="/outlets" component={Outlets} />
              <Route path="/rooms/:id" component={Rooms} />

              <Route exact={true} path="/add_room" component={AddRoom} />
                <Route exact={true} path="/login" component={Login} />
                <Route exact={true} path="/signup" component={SignUp} />
                <Route
                  exact={true}
                  path="/credentials"
                  component={Credentials}
                />
              </Switch>
        </Router>
      </div>
    );
  
}

export default App;
