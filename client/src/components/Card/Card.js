import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import "./Card.css"
import Description from "../../pages/Description/Description"


const reloadPage = () => (<Link to="/description"/>)
    

export const Card = props => (
    <div 
    className="card" 
    value={props.id} 
    >
    <div>
      <img alt="image" src={props.image} style={{justifyContent: 'center', alignItems: 'center'}}>
      </img>
    </div>
  </div>
  );

