import React from "react";
import {NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <p><NavLink to="/"> Home </NavLink></p>
      <p><NavLink to="/movies"> Movies</NavLink> </p>
      <p><NavLink to="/directors"> Directors</NavLink></p>
      <p><NavLink to="/actors">  Actors</NavLink></p>
    </div>
  );
}

export default NavBar;
