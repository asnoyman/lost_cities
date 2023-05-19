import React, { useCallback } from 'react';
import { useDrop } from 'react-dnd';
import Card from './Card';
import { ItemTypes } from './ItemTypes';

const CardZone = ({ color, cards, moveCardInHand, moveCardToBoard }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: () => ({ name: color }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const renderCard = useCallback((card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        src={card.src}
        moveCardInHand={moveCardInHand}
        moveCardToBoard={moveCardToBoard}
      />
    );
  }, []);

  const borderColor = color === 'white' ? 'black' : color;
  return (
    <>
      <div ref={drop} className='card-zone-div' style={{ borderColor }}>
        {cards[0] && renderCard(cards[cards.length - 1], 0)}
      </div>

    </>
  );
};

export default CardZone;
