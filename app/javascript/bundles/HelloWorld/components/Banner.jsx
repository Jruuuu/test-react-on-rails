import React from "react";
import WrenchIcon from "./WrenchIcon";

export default function Banner(props) {


  const isOn = props.BannerMessage[0].isOn
  const message = props.BannerMessage[0].message

  if (isOn === true) {
  return (

    <div>
      <div>
        <WrenchIcon />
          {message}
      </div>
    </div>
    )
  } 

};
