import React from "react";
import { Link } from "react-router-dom";

const FiveOne = (props) => {
  console.log("Five/one " + props);

  return(
    <React.Fragment>
      <Link to="five/two">
        Five/two
      </Link>
      <Link to="five/three">
        Five/three
      </Link>
    </React.Fragment>
  )
}

export default FiveOne;