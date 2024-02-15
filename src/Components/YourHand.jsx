import React, { useCallback } from 'react';
import CardZone from './CardZone';

const YourHand = ({ cards, toggleClass }) => {
  const renderCards = () => {
    const formatted_cards = [];
    for (let i = 0; i < 8; i++) {
      const card = i < cards.length ? cards[i] : null
      formatted_cards.push(<CardZone key={"yourCard" + i} card={card} toggleClass={toggleClass} idx={i} loc={'yourHand'} />);
    }
    return formatted_cards;
  };
  return (
    <>
      <div className='card-zone'>{renderCards()}</div>
    </>
  );
};

export default YourHand;
