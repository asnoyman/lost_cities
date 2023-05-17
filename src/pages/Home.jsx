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

  const [board, setBoard] = useState([{
    purple: [],
    white: [],
    blue: [],
    red: [],
    green: [],
    yellow: [],
  }]);

  const moveCardInHand = useCallback((dragIndex, hoverIndex) => {
    setYourHand((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  const moveCardToBoard = useCallback((dragIndex, hoverIndex) => {
    setBoard((prevBoard) =>
      update(prevBoard, {
        0: {blue: {$push: [1]}}
      })
    );
  }, []);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <OpponentHand />
        <Board board={board} moveCard={moveCardToBoard}/>
        <YourHand cards={yourHand} moveCard={moveCardInHand} />
      </DndProvider>
    </>
  );
};

export default Home;
