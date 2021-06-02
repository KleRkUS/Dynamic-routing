import React from "react";
import { Link } from "react-router-dom";

const OneOne = (props) => {
  console.log("One/one " + props);

  return(
    <Link to="one/two">
      One/two
    </Link>
  )
}

export default OneOne;