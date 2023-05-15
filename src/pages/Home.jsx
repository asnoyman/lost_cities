// import { useCallback, useState } from 'react';
// import CardZone from '../Components/CardZone';
import { useState } from 'react';
import Cards from '../Components/Cards';
import redHS from '../Images/redHS.png';
import blue3 from '../Images/blue3.png';
import white10 from '../Images/white10.png';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from "immutability-helper";
import cuid from 'cuid';

const Home = () => {
  const [cards, setCards] = useState([
    { id: cuid(), src: redHS },
    { id: cuid(), src: blue3 },
    { id: cuid(), src: white10 },
  ]);

  // const onDrop = useCallback((newCards) => {
  //   newCards.map((file) => {
  //     const reader = new FileReader();
  //     reader.onload = function (e) {
  //       setCards((prevState) => [...prevState, { id: cuid(), src: e.target.result }]);
  //     };
  //     reader.readAsDataURL(file);
  //     return file;
  //   });
  // }, []);

  const moveCard = (dragIndex, hoverIndex) => {
    // Get the dragged element
    const draggedImage = cards[dragIndex];
    /*
      - copy the dragged image before hovered element (i.e., [hoverIndex, 0, draggedImage])
      - remove the previous reference of dragged element (i.e., [dragIndex, 1])
      - here we are using this update helper method from immutability-helper package
    */
    setCards(
      update(cards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, draggedImage],
        ],
      })
    );
  };

  return (
    <>
      {/* <CardZone onDrop={onDrop} /> */}
      <DndProvider backend={HTML5Backend}>
        <Cards cards={cards} moveCard={moveCard} />
      </DndProvider>
      {cards.map((card) => <div>{card.id}</div>)}
    </>
  );
};

export default Home;
