import { useState } from 'react';
import YourHand from '../Components/YourHand';
import redHS from '../Images/redHS.png';
import blue3 from '../Images/blue3.png';
import white10 from '../Images/white10.png';
import cuid from 'cuid';
import OpponentHand from '../Components/OpponentHand';
import Discard from '../Components/Discard';
import PlayArea from '../Components/PlayArea';
import PlayAreaOpp from '../Components/PlayAreaOpp';
import back from '../Images/back.png';

const Home = () => {
  const SELECTED = 'card-slot-selected';
  const NOT_SELECTED = 'card-slot';
  const colors = ["purple", "red", "green", "blue", "white", "yellow"]
  const PLAY_CARD = 0;
  const DRAW_CARD = 1;

  const [gameState, setGameState] = useState(PLAY_CARD);

  const [cardSelected, setCardSelected] = useState(null);

  const toggleClass = (idx, loc) => {
    const newHand = [...yourHand];
    if (!cardSelected) {
      // If there is no card selected,
      // Set the card that was clicked as selected
      if (loc === "YourHand") {
        setCardSelected({ loc: loc, idx: idx });
        newHand[idx].isSelected = SELECTED;
      }
    } else {
      if (loc === "YourHand") {
        // If a different card in your hand was selected
        const temp = newHand[cardSelected.idx];
        newHand[cardSelected.idx].isSelected = NOT_SELECTED;
        newHand[cardSelected.idx] = newHand[idx];
        newHand[idx] = temp;
        setCardSelected(null);
      } else if (loc === "Discard") {
        // If a board space is selected, add card to that space
        // if the color matches
        if (newHand[cardSelected.idx].color === colors[idx]) {
          newHand[cardSelected.idx].isSelected = NOT_SELECTED;
          discard[colors[idx]].push(newHand[cardSelected.idx]);
          newHand.splice(cardSelected.idx, 1)
          setCardSelected(null);
        }
      } else if (loc === "PlayAreaYou") {
        if (newHand[cardSelected.idx].color === colors[idx] && newHand[cardSelected.idx].number >= playAreaYou[colors[idx]][playAreaYou[colors[idx]].length - 1].number) {
          newHand[cardSelected.idx].isSelected = NOT_SELECTED;
          playAreaYou[colors[idx]].push(newHand[cardSelected.idx]);
          newHand.splice(cardSelected.idx, 1)
          setCardSelected(null);
        }
      }
    }
    setYourHand(newHand);
    setDiscard({...discard});
    setPlayAreaYou({...playAreaYou})
  };

  const [yourHand, setYourHand] = useState([
    { id: cuid(), src: redHS, isSelected: NOT_SELECTED, color: "red", number: 0},
    { id: cuid(), src: blue3, isSelected: NOT_SELECTED, color: "blue", number: 3},
    { id: cuid(), src: white10, isSelected: NOT_SELECTED, color: "white", number: 10},
    { id: cuid(), src: redHS, isSelected: NOT_SELECTED, color: "red", number: 0},
    { id: cuid(), src: blue3, isSelected: NOT_SELECTED, color: "blue", number: 3},
    { id: cuid(), src: white10, isSelected: NOT_SELECTED, color: "white", number: 10},
    { id: cuid(), src: redHS, isSelected: NOT_SELECTED, color: "red", number: 0},
    { id: cuid(), src: blue3, isSelected: NOT_SELECTED, color: "blue", number: 3},
  ]);

  const [discard, setDiscard] = useState({
    purple: [{ id: cuid(), src: back, isSelected: NOT_SELECTED, color: "purple", number: -1}],
    white: [{ id: cuid(), src: back, isSelected: NOT_SELECTED, color: "white", number: -1}],
    blue: [{ id: cuid(), src: back, isSelected: NOT_SELECTED, color: "blue", number: -1}],
    red: [{ id: cuid(), src: back, isSelected: NOT_SELECTED, color: "red", number: -1}],
    green: [{ id: cuid(), src: back, isSelected: NOT_SELECTED, color: "green", number: -1}],
    yellow: [{ id: cuid(), src: back, isSelected: NOT_SELECTED, color: "yellow", number: -1}],
  });
  const [playAreaYou, setPlayAreaYou] = useState({
    purple: [{ id: cuid(), src: back, isSelected: NOT_SELECTED, color: "purple", number: -1}],
    white: [{ id: cuid(), src: back, isSelected: NOT_SELECTED, color: "white", number: -1}],
    blue: [{ id: cuid(), src: back, isSelected: NOT_SELECTED, color: "blue", number: -1}],
    red: [{ id: cuid(), src: back, isSelected: NOT_SELECTED, color: "red", number: -1}],
    green: [{ id: cuid(), src: back, isSelected: NOT_SELECTED, color: "green", number: -1}],
    yellow: [{ id: cuid(), src: back, isSelected: NOT_SELECTED, color: "yellow", number: -1}],
  });
  const [playAreaOpp, setPlayAreaOpp] = useState({
    purple: [{ id: cuid(), src: back, isSelected: NOT_SELECTED, color: "purple", number: -1}],
    white: [{ id: cuid(), src: back, isSelected: NOT_SELECTED, color: "white", number: -1}],
    blue: [{ id: cuid(), src: back, isSelected: NOT_SELECTED, color: "blue", number: -1}],
    red: [{ id: cuid(), src: back, isSelected: NOT_SELECTED, color: "red", number: -1}],
    green: [{ id: cuid(), src: back, isSelected: NOT_SELECTED, color: "green", number: -1}],
    yellow: [{ id: cuid(), src: back, isSelected: NOT_SELECTED, color: "yellow", number: -1}],
  });

  return (
    <>
      <OpponentHand />
      <PlayAreaOpp key={cuid() + playAreaOpp.toString()} cards={playAreaOpp} toggleClass={toggleClass} />
      <Discard key={cuid() + discard.toString()} discard={discard} toggleClass={toggleClass} />
      <PlayArea key={cuid() + playAreaYou.toString()} cards={playAreaYou} toggleClass={toggleClass} />
      <YourHand key={yourHand.map(card => card.id.toString()).concat()} cards={yourHand} toggleClass={toggleClass} />
    </>
  );
};

export default Home;
