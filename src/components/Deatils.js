import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
export const Deatils = ({
  name,
  setShowDetails,
  img,
  height,
  weight,
  stat,

}) => {
  return (
    <div className="MainModal">
      <div className="Modal">
      <FontAwesomeIcon  style={{right:"-550",top:"-170",position:"relative",fontSize:"34px", color:"black",padding:"5px",borderRadius:"50%"}}
          onClick={() => {
            setShowDetails(false);
          }}
          icon={faXmark}
        />
        <div
          className="First"

        >
          <img
            src={img}
            alt="title"
            style={{ height: "200px", width: "300px" }}
          />
          <h2 style={{ color: "black", textTransform: "Uppercase" }}>{name}</h2>
        </div>
        <div className="second">
          <h1>height:{height}</h1>
          <h1>weight:{weight}</h1>
        </div>
        <div className="third">
          <h3>stat1:{stat}</h3>
        </div>
        <div>     
        </div>
        
      </div>
    </div>
  );
};
