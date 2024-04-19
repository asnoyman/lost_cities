import React from 'react';
import CardZoneMulti from './CardZoneMulti';

const PlayArea = ({ cards, toggleClass }) => {
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
          cards={cards.purple}
          toggleClass={toggleClass}
          idx={0}
          loc={"PlayAreaYou"}
        />
        <CardZoneMulti
          cards={cards.red}
          toggleClass={toggleClass}
          idx={1}
          loc={"PlayAreaYou"}
        />
        <CardZoneMulti
          cards={cards.green}
          toggleClass={toggleClass}
          idx={2}
          loc={"PlayAreaYou"}
        />
        <CardZoneMulti
          cards={cards.blue}
          toggleClass={toggleClass}
          idx={3}
          loc={"PlayAreaYou"}
        />
        <CardZoneMulti
          cards={cards.white}
          toggleClass={toggleClass}
          idx={4}
          loc={"PlayAreaYou"}
        />
        <CardZoneMulti
          cards={cards.yellow}
          toggleClass={toggleClass}
          idx={5}
          loc={"PlayAreaYou"}
        />
        <CardZoneMulti
          cards={[{id: "Invisible", src: "transparent", isSelected: 'card-slot', color: "transparent", number: -1}]}
          toggleClass={toggleClass}
          idx={6}
          loc={"N/A"}
        />
      </div>
    </>
  );
};

export default PlayArea;
