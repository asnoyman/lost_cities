import React from 'react';
import Card from './Card';

const Cards = ({ cards, moveCard }) => {
  // render each card by calling Card component
  const renderCard = (card, index) => {
    return card ? (
      <Card card={card} index={index} moveCard={moveCard} />
    ) : null;
  };

  // Return the list of files
  return <section className='card-list'>{cards.map(renderCard)}</section>;
};

export default Cards;
