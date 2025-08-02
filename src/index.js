import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";


// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import FieldsList from "views/FieldsList.js";
import Booking from "views/auth/Booking.js";
import MyBooking from "views/auth/MyBooking";
import Tournament from "views/auth/Tournament.js"; 
import MyTournaments from "views/auth/MyTournaments.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/fieldslist" exact component={FieldsList} />
      <Route path="/booking" exact component={Booking} />
      <Route path="/mybooking" exact component={MyBooking} />
      <Route path="/tournament" exact component={Tournament} />
      <Route path="/mytournaments" exact component={MyTournaments} />

      
      {/* add index route */}
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
