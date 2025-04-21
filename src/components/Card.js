import React,{useState} from "react";
import { Deatils } from "./Deatils";

export const Card = ({
  number,
  name,
  img,
  height,
  weight,
  stat
}) => {
    const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      
      <div  className="MainCard">
        <div className="Card">
          <p>#{number}</p>
          <img src={img} alt="title"></img>
          <h2 style={{color:"whitesmoke",textTransform:"Uppercase"}}>{name}</h2>
          <button
            onClick={() => setShowDetails(true)}
            style={{
              height: "40px",
              width: "150px",
              color: "white",
              border: "none",
              borderRadius: "15px",
              fontSize: "1.3rem",
            }}
          >
            know More
          </button>
        </div>
        { showDetails && <Deatils name={name} img={img} number={number} height={height} weight={weight} setShowDetails={setShowDetails} stat={stat}/> }

      </div>
    </>
  );
};
