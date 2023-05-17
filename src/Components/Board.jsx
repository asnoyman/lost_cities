import React, { useCallback } from 'react';
import Card from './Card';
import blue3 from '../Images/blue3.png';
import { ItemTypes } from './ItemTypes';

const Board = ({ board, moveCard }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: () => ({name: 'board'})
  });

  const renderCard = useCallback((card, index) => {
    return <Card key={card.id} index={index} id={card.id} src={card.src} moveCard={moveCard} />;
  }, []);

  return (
    <>
      <div className='board'>
        {board[0].blue.map((card, i) => renderCard({ id: i, src: blue3 }, i))}
      </div>
    </>
  );
};

export default Board;
