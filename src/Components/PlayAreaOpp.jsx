import React from 'react';
import CardZone from './CardZone';

const PlayAreaOpp = ({ cards, toggleClass }) => {
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
          card={cards.purple[cards.purple.length - 1]}
          toggleClass={toggleClass}
          idx={0}
          loc={"PlayAreaOpp"}
        />
        <CardZone
          card={cards.red[cards.red.length - 1]}
          toggleClass={toggleClass}
          idx={1}
          loc={"PlayAreaOpp"}
        />
        <CardZone
          card={cards.green[cards.green.length - 1]}
          toggleClass={toggleClass}
          idx={2}
          loc={"PlayAreaOpp"}
        />
        <CardZone
          card={cards.blue[cards.blue.length - 1]}
          toggleClass={toggleClass}
          idx={3}
          loc={"PlayAreaOpp"}
        />
        <CardZone
          card={cards.white[cards.white.length - 1]}
          toggleClass={toggleClass}
          idx={4}
          loc={"PlayAreaOpp"}
        />
        <CardZone
          card={cards.yellow[cards.yellow.length - 1]}
          toggleClass={toggleClass}
          idx={5}
          loc={"PlayAreaOpp"}
        />
        <CardZone
          card={{id: "Invisible", src: "transparent", isSelected: 'card-slot', color: "transparent", number: -1}}
          toggleClass={toggleClass}
          idx={6}
          loc={"N/A"}
        />
      </div>
    </>
  );
};

export default PlayAreaOpp;
