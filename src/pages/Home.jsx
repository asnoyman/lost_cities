// import CardZone from '../Components/CardZone';
import { useCallback, useState } from 'react';
import Cards from '../Components/Cards';
import redHS from '../Images/redHS.png';
import blue3 from '../Images/blue3.png';
import white10 from '../Images/white10.png';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import cuid from 'cuid';

const Home = () => {
  const [cards, setCards] = useState([
    { id: 'red', src: redHS },
    { id: 'blue', src: blue3 },
    { id: 'white', src: white10 },
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
    const draggedCard = cards[dragIndex];
    const hoveredCard = cards[hoverIndex];
    const updatedCards = [...cards];
    updatedCards[hoverIndex] = draggedCard;
    updatedCards[dragIndex] = hoveredCard;
    setCards(updatedCards);
  };

  return (
    <>
      {/* <CardZone onDrop={onDrop} /> */}
      <DndProvider backend={HTML5Backend}>
        <Cards cards={cards} moveCard={moveCard} />
      </DndProvider>
    </>
  );
};

export default Home;
