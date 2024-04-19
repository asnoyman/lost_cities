import React from 'react';
import CardZoneMulti from './CardZoneMulti';
import back from '../Images/back.png';

const Discard = ({ discard, toggleClass }) => {
  return (
    <>
      <div className='card-zone'>
        <CardZoneMulti
          cards={[{id: "Invisible", src: "transparent", isSelected: 'card-slot', color: "transparent", number: -1}]}
          toggleClass={toggleClass}
          idx={-1}
          loc={"N/A"}
        />
        <CardZoneMulti
          cards={discard.purple}
          toggleClass={toggleClass}
          idx={0}
          loc={"Discard"}
        />
        <CardZoneMulti
          cards={discard.red}
          toggleClass={toggleClass}
          idx={1}
          loc={"Discard"}
        />
        <CardZoneMulti
          cards={discard.green}
          toggleClass={toggleClass}
          idx={2}
          loc={"Discard"}
        />
        <CardZoneMulti
          cards={discard.blue}
          toggleClass={toggleClass}
          idx={3}
          loc={"Discard"}
        />
        <CardZoneMulti
          cards={discard.white}
          toggleClass={toggleClass}
          idx={4}
          loc={"Discard"}
        />
        <CardZoneMulti
          cards={discard.yellow}
          toggleClass={toggleClass}
          idx={5}
          loc={"Discard"}
        />
        <CardZoneMulti
          cards={[{id: "DrawPile", src: back, isSelected: 'card-slot', color: "black", number: -1}]}
          toggleClass={toggleClass}
          idx={6}
          loc={"Draw"}
        />
      </div>
    </>
  );
};

export default Discard;
