import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"

export const Card = props => {
  console.log("Card info")
  console.log(props)
  return (
    <div 
    className="card" 
    value={props.id} 
    // onClick={() => props.handleClick(props.id)}
    
  >
    <div>
      <img alt="image" src={props.image} style={{justifyContent: 'center', alignItems: 'center'}}>
      {/* <h1> what the text </h1>
      {<Link to={"/api/inventory/" + props.item._id}>
              <strong>
                {props.item.item_name}         
              </strong>
            </Link>} */}
      </img>
    </div>
    
  </div>
  );
};
