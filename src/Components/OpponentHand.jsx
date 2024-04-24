import React, { useCallback } from 'react';
import cuid from 'cuid';
import CardZone from './CardZone';

const OpponentHand = () => {
  const renderCards = useCallback(() => {
    const back = "/Images/back.png"
    const cards = [];
    for (let i = 0; i < 8; i++) {
      cards.push(<CardZone key={"oppCard" + i} card={{src: back, id: cuid(), isSelected: 'card-slot', color: "black", number: -1}} className={'card-slot'} toggleClass={() => {}} loc="OppHand"/>);
    }
    return cards;
  }, []);
  return (
    <>
      <div className='card-zone'>{renderCards()}</div>
    </>
  );
};

export default OpponentHand;
