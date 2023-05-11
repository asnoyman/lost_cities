import React from 'react';

const Cards = () => {

  const dragItem = React.useRef();
  const dragOverItem = React.useRef();
  const [cards, setCards] = React.useState(['red', 'yellow', 'green', 'blue', 'purple'])

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };
 
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const drop = (e) => {
    const copyCards = [...cards];
    const dragItemContent = copyCards[dragItem.current];
    copyCards.splice(dragItem.current, 1);
    copyCards.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setCards(copyCards);
  };


  return (
    <>
    {cards && cards.map((val, index) => (
      <div style={{backgroundColor:`${val}`, height:'100px', width:'100px', margin:'4px', fontSize:'30px'}}
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        draggable
      >
          {val}
      </div>
    ))}
  </>
  );
};

export default Cards;
