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
  if (logged === "true") {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/outlets">Outlets</Link>
                </li>
                <li>
                  <Link to="/logout" onClick={handleClick}>
                    Log Out
                  </Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
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
            </Switch>
          </div>
        </Router>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <div className="grid">
              <Switch>
                <Route exact={true} path="/login" component={Login} />
                <Route exact={true} path="/signup" component={SignUp} />
                <Route
                  exact={true}
                  path="/credentials"
                  component={Credentials}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
