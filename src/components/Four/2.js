import React from "react";
import {Link} from "react-router-dom";

const FourTwo = (props) => {
  console.log("Four/two " + props);

  return(
    <Link to="four/two/three">
      Four/Three
    </Link>
  )
}

export default FourTwo;