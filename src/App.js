import React, { useEffect, useState } from "react";

import "./App.css";

// import Login from "./components/login";
// import SignUp from "./components/signUp";
// import Credentials from "./components/credentials";
// import Locations from "./components/locations";
// import AddRoom from "./components/addRoom";
// import AddLocation from "./components/addLocation";
// import AddOutlet from "./components/addOutlet";
// import Outlets from "./components/outlets";
// import Rooms from "./components/rooms";

import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Credentials from "./pages/Credential/Credentials";
import Locations from "./pages/Location//Locations";
import AddLocation from "./pages/Location/AddLocation";
import AddRoom from "./pages/Room/AddRoom";
import AddOutlet from "./pages/Outlet/AddOutlet";
import Outlets from "./pages/Outlet/Outlets";
import Rooms from "./pages/Room/Rooms";
import Home from "./pages/Home/Home";
import Graph from "./pages/Graph/Graph";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/add" component={Locations} />
          <Route
            exact={true}
            path="/add_location"
            component={AddLocation}
          />
          <Route path="/graph/:id" component={Graph} />
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
     <Footer></Footer>
    </div>
  );

}

export default App;
