import React from 'react';
import CardZone from './CardZone';

const Board = ({ board, toggleClass }) => {
  return (
    <>
      <div className='card-zone'>
        <div className='card-slot' style={{ borderColor: 'transparent' }} />
        <CardZone
          card={board.purple[board.purple.length - 1]}
          toggleClass={toggleClass}
          idx={0}
          loc={"board"}
        />
        <CardZone
          card={board.red[board.red.length - 1]}
          toggleClass={toggleClass}
          idx={1}
          loc={"board"}
        />
        <CardZone
          card={board.green[board.green.length - 1]}
          toggleClass={toggleClass}
          idx={2}
          loc={"board"}
        />
        <CardZone
          card={board.blue[board.blue.length - 1]}
          toggleClass={toggleClass}
          idx={3}
          loc={"board"}
        />
        <CardZone
          card={board.white[board.white.length - 1]}
          toggleClass={toggleClass}
          idx={4}
          loc={"board"}
        />
        <CardZone
          card={board.yellow[board.yellow.length - 1]}
          toggleClass={toggleClass}
          idx={5}
          loc={"board"}
        />
        
        <div className='card-slot' style={{ borderColor: 'transparent' }} />
      </div>
    </>
  );
};

export default Board;
