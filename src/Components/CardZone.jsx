import React from 'react';
import Card from './Card';

const CardZone = ({ card, toggleClass, idx, loc }) => {
  var borderColor = !card || card.color === "white"  ? 'black' : card.color;
  borderColor = !card ? "transparent" : borderColor
  
  return (
    <>
      <div className={card ? card.isSelected : 'card-slot'} style={{ borderColor }} onClick={() => toggleClass(idx, loc)}>
        {!card ? <Card key={-1} src={null} /> : <Card key={card.id} src={card.src} />}
      </div>
    </>
  );
};

export default CardZone;