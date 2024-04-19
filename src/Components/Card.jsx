import React from 'react';

const colors = ["purple", "red", "green", "blue", "white", "yellow", "transparent"]

export const Card = ({ src }) => {
  
  if (colors.includes(src)) {
    return <div className="empty-pile" style={{backgroundColor: src}}></div>
  } 
  return <div> <img src={src}/> </div>;
};

export default Card;
