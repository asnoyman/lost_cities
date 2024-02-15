import React from 'react';
import CardZone from './CardZone';
import back from '../Images/back.png';

const Discard = ({ discard, toggleClass }) => {
  return (
    <>
      <div className='card-zone'>
        <CardZone
          card={{id: "Invisible", src: "transparent", isSelected: 'card-slot', color: "transparent", number: -1}}
          toggleClass={toggleClass}
          idx={-1}
          loc={"N/A"}
        />
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
        <CardZone
          card={{id: "DrawPile", src: back, isSelected: 'card-slot', color: "black", number: -1}}
          toggleClass={toggleClass}
          idx={6}
          loc={"Draw"}
        />
      </div>
    </>
  );
};

export default Discard;
