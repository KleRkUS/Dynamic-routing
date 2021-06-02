import React from "react";
import { Link, useLocation } from "react-router-dom";

const AppBar = () => {
  const location = useLocation();

  return(
    <div>
      <h2>{location.pathname}</h2>
      <Link to="/">Домой</Link>
    </div>
  );
}

export default AppBar;