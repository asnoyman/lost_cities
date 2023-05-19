import React, { useCallback } from 'react';
import Card from './Card';

const YourHand = ({ cards, moveCardInHand, moveCardToBoard }) => {
  const renderCard = useCallback((card, index) => {
    return <Card key={card.id} index={index} id={card.id} src={card.src} moveCardInHand={moveCardInHand} moveCardToBoard={moveCardToBoard} />;
  }, []);
  return (
    <>
      <div className='card-list'>{cards.map((card, i) => renderCard(card, i))}</div>
    </>
  );
};

export default YourHand;
