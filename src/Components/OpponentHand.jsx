import React, { useCallback } from 'react';
import back from '../Images/back.png';
import cuid from 'cuid';
import CardZone from './CardZone';

const OpponentHand = () => {
  const renderCards = useCallback(() => {
    const cards = [];
    for (let i = 0; i < 8; i++) {
      cards.push(<CardZone key={"oppCard" + i} card={{src: back, id: cuid(), isSelected: 'card-slot', color: "black", number: -1}} className={'card-slot'} toggleClass={() => {}}/>);
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
