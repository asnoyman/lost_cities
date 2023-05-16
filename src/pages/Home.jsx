// import CardZone from '../Components/CardZone';
import { useCallback, useState } from 'react';
import YourHand from '../Components/YourHand';
import redHS from '../Images/redHS.png';
import blue3 from '../Images/blue3.png';
import white10 from '../Images/white10.png';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import cuid from 'cuid';
import OpponentHand from '../Components/OpponentHand';
import Board from '../Components/Board';

const Home = () => {
  const [yourHand, setYourHand] = useState([
    { id: cuid(), src: redHS },
    { id: cuid(), src: blue3 },
    { id: cuid(), src: white10 },
    { id: cuid(), src: redHS },
    { id: cuid(), src: blue3 },
    { id: cuid(), src: white10 },
    { id: cuid(), src: redHS },
    { id: cuid(), src: blue3 },
  ]);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setYourHand((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  // const onDrop = useCallback((newCards) => {
  //   newCards.map((file) => {
  //     const reader = new FileReader();
  //     reader.onload = function (e) {
  //       setYourHand((prevState) => [...prevState, { id: cuid(), src: e.target.result }]);
  //     };
  //     reader.readAsDataURL(file);
  //     return file;
  //   });
  // }, []);

  return (
    <>
      {/* <CardZone onDrop={onDrop} /> */}
      <DndProvider backend={HTML5Backend}>
        <OpponentHand />
        <Board />
        <YourHand cards={yourHand} moveCard={moveCard} />
      </DndProvider>
    </>
  );
};

export default Home;
