import React, { useCallback } from 'react';
import Card from './Card';
import back from '../Images/back.png';
import cuid from 'cuid';

const OpponentHand = () => {
  const renderCards = useCallback(() => {
    const cards = [];
    for (let i = 0; i < 8; i++) {
      cards.push(<Card key={`opp-card-${i}`} index={i} id={cuid()} src={back} moveCard={() => {}} />);
    }
    return cards;
  }, []);
  return (
    <>
      <div className='card-list'>{renderCards()}</div>
    </>
  );
};

export default OpponentHand;
