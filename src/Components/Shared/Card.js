import React from 'react';
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
      <img src={props.image} alt={props.title} className="card-image" />
        <h3 className='card-title'>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;