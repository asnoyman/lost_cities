import React from 'react';
import CardZone from './CardZone';

const Discard = ({ discard, toggleClass }) => {
  return (
    <>
      <div className='card-zone'>
        <div className='card-slot' style={{ borderColor: 'transparent' }} />
        <CardZone
          card={discard.purple[discard.purple.length - 1]}
          toggleClass={toggleClass}
          idx={0}
          loc={"Discard"}
        />
        <CardZone
          card={discard.red[discard.red.length - 1]}
          toggleClass={toggleClass}
          idx={1}
          loc={"Discard"}
        />
        <CardZone
          card={discard.green[discard.green.length - 1]}
          toggleClass={toggleClass}
          idx={2}
          loc={"Discard"}
        />
        <CardZone
          card={discard.blue[discard.blue.length - 1]}
          toggleClass={toggleClass}
          idx={3}
          loc={"Discard"}
        />
        <CardZone
          card={discard.white[discard.white.length - 1]}
          toggleClass={toggleClass}
          idx={4}
          loc={"Discard"}
        />
        <CardZone
          card={discard.yellow[discard.yellow.length - 1]}
          toggleClass={toggleClass}
          idx={5}
          loc={"Discard"}
        />
        
        <div className='card-slot' style={{ borderColor: 'transparent' }} />
      </div>
    </>
  );
};

export default Discard;
