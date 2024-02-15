import React from 'react';
import CardZone from './CardZone';

const PlayArea = ({ cards, toggleClass }) => {
  return (
    <>
      <div className='card-zone'>
        <div className='card-slot' style={{ borderColor: 'transparent' }} />
        <CardZone
          card={cards.purple[cards.purple.length - 1]}
          toggleClass={toggleClass}
          idx={0}
          loc={"PlayAreaYou"}
        />
        <CardZone
          card={cards.red[cards.red.length - 1]}
          toggleClass={toggleClass}
          idx={1}
          loc={"PlayAreaYou"}
        />
        <CardZone
          card={cards.green[cards.green.length - 1]}
          toggleClass={toggleClass}
          idx={2}
          loc={"PlayAreaYou"}
        />
        <CardZone
          card={cards.blue[cards.blue.length - 1]}
          toggleClass={toggleClass}
          idx={3}
          loc={"PlayAreaYou"}
        />
        <CardZone
          card={cards.white[cards.white.length - 1]}
          toggleClass={toggleClass}
          idx={4}
          loc={"PlayAreaYou"}
        />
        <CardZone
          card={cards.yellow[cards.yellow.length - 1]}
          toggleClass={toggleClass}
          idx={5}
          loc={"PlayAreaYou"}
        />
        
        <div className='card-slot' style={{ borderColor: 'transparent' }} />
      </div>
    </>
  );
};

export default PlayArea;
