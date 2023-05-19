import React, { useCallback } from 'react';
import Card from './Card';
import blue3 from '../Images/blue3.png';
import { ItemTypes } from './ItemTypes';
import { useDrop } from 'react-dnd';
import CardZone from './CardZone';

const Board = ({ board, moveCardToBoard, moveCardInHand }) => {

  return (
    <>
      <div className='board'>
        <CardZone
          color={'purple'}
          cards={board.purple}
          moveCardToBoard={moveCardToBoard}
          moveCardInHand={moveCardInHand}
        />
        <CardZone
          color={'blue'}
          cards={board.blue}
          moveCardToBoard={moveCardToBoard}
          moveCardInHand={moveCardInHand}
        />
        <CardZone
          color={'red'}
          cards={board.red}
          moveCardToBoard={moveCardToBoard}
          moveCardInHand={moveCardInHand}
        />
        <CardZone
          color={'white'}
          cards={board.white}
          moveCardToBoard={moveCardToBoard}
          moveCardInHand={moveCardInHand}
        />
        <CardZone
          color={'yellow'}
          cards={board.yellow}
          moveCardToBoard={moveCardToBoard}
          moveCardInHand={moveCardInHand}
        />
        <CardZone
          color={'green'}
          cards={board.green}
          moveCardToBoard={moveCardToBoard}
          moveCardInHand={moveCardInHand}
        />
      </div>
    </>
  );
};

export default Board;
