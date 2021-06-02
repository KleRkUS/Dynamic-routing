import React from "react";
import { Link } from "react-router-dom";

const TwoOne = (props) => {
  console.log("Two/one " + props);

  return(
    <Link to="two/two">
      Two/two
    </Link>
  )
}

export default TwoOne;