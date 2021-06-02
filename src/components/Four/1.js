import React from "react";
import { Link } from "react-router-dom";

const FourOne = (props) => {
  console.log("four/one " + props);

  return(
    <Link to="four/two">
      Two/two
    </Link>
  )
}

export default FourOne;