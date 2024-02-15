import React, { useCallback, useState } from 'react';
import Card from './Card';

const CardZone = ({ card, toggleClass, idx, loc }) => {

  const renderCard = (card) => {
    return (
      <Card
        key={card.id}
        src={card.src}
      />
    );
  };

  const borderColor = !card || card.color === "white"  ? 'black' : card.color;
  return (
    <>
      <div className={card ? card.isSelected : 'card-slot'} style={{ borderColor }} onClick={() => toggleClass(idx, loc)}>
        {card && renderCard(card)}
      </div>

    </>
  );
};

export default CardZone;
