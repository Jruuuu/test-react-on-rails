import React from "react";
import WrenchIcon from "./WrenchIcon";

const Banner = (props) => {
 

  return (
    <div>
    <div>
        <WrenchIcon />
      <span>
      Hello {props.name} We've detected technical issues in our system.
        You can continue working, though some users may experience delays.
      </span>
    </div>
  </div>
  )
};
export default Banner;