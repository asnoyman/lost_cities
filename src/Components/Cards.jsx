import React from 'react';
import Card from './Card';

const Cards = ({ cards, moveCard }) => {
  // render each card by calling Card component
  const renderCard = (card, index) => {
    return card ? <Card card={card} index={index} moveCard={moveCard} /> : null;
  };

  // Return the list of files
  return (
    <>
      <section className='card-list'>{cards.map((card, i) => renderCard(card, i))}</section>
      <div>{cards.map((card, i) => (<div>{card.id} {i}</div>))}</div>
    </>
  );
};

export default Cards;
