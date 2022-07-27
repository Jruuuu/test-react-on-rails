import React from "react";
import WrenchIcon from "./WrenchIcon";

const Banner=()=> {
  return (
    <div className="usa-banner">
    <div className="usa-grid usa-banner-inner">
        <WrenchIcon />
      <span className="banner-text">
        We've detected technical issues in our system.
        You can continue working, though some users may experience delays.
      </span>
    </div>
  </div>
  )
};
export default Banner;