import React, { useRef } from 'react';

const colors = ["purple", "red", "green", "blue", "white", "yellow", "transparent"]

export const Card = ({ src }) => {
  
  if (colors.includes(src)) {
    return <div class="empty-pile" style={{backgroundColor: src}}></div>
  } 
  return <img src={src}/>;
};

export default Card;
