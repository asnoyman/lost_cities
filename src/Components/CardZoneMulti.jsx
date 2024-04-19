import React from 'react';
import Card from './Card';

const CardZoneMulti = ({ cards, toggleClass, idx, loc }) => {
  var borderColor = cards[0].color === "white"  ? 'black' : cards[0].color;
  
  return (
    <>
    {
      cards.length === 1 ?
      <div className={cards[cards.length - 1].isSelected} style={{ borderColor }} onClick={() => toggleClass(idx, loc)}>
        <Card key={cards[0].id} src={cards[0].src} />
      </div> :
      <div className={cards[cards.length - 1].isSelected} style={{ borderColor }} onClick={() => toggleClass(idx, loc)}>
        {cards.slice(1).map((card, index) => <Card key={card.id} src={card.src} />)}
      </div>
    }
    </>
  );
};

export default CardZoneMulti;