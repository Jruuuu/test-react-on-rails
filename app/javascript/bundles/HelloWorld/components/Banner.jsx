import React, { useState, useEffect } from "react";
import WrenchIcon from "./WrenchIcon";

const Banner = (props) => {

 const [post, setPost] = useState(props)
    return (
      <div>
    <div>
        <WrenchIcon />
      <div>
      Hello  We've detected technical issues in our system.
        You can continue working, though some users may experience delays.
      {post} "These are post"
      </div>
    </div>
  </div>
  )
};
export default Banner;