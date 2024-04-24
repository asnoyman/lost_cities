const express = require("express");
const app = express();

const cards = [
  { src: "/Images/blue2.png", isSelected: 'card-slot', color: "blue", number: 2},
  { src: "/Images/blue3.png", isSelected: 'card-slot', color: "blue", number: 3},
  { src: "/Images/blue4.png", isSelected: 'card-slot', color: "blue", number: 4},
  { src: "/Images/blue5.png", isSelected: 'card-slot', color: "blue", number: 5},
  { src: "/Images/blue6.png", isSelected: 'card-slot', color: "blue", number: 6},
  { src: "/Images/blue7.png", isSelected: 'card-slot', color: "blue", number: 7},
  { src: "/Images/blue8.png", isSelected: 'card-slot', color: "blue", number: 8},
  { src: "/Images/blue9.png", isSelected: 'card-slot', color: "blue", number: 9},
  { src: '/Images/blue10.png', isSelected: 'card-slot', color: "blue", number: 10},
  { src: "/Images/green2.png", isSelected: 'card-slot', color: "green", number: 2},
  { src: "/Images/green3.png", isSelected: 'card-slot', color: "green", number: 3},
  { src: "/Images/green4.png", isSelected: 'card-slot', color: "green", number: 4},
  { src: "/Images/green5.png", isSelected: 'card-slot', color: "green", number: 5},
  { src: "/Images/green6.png", isSelected: 'card-slot', color: "green", number: 6},
  { src: "/Images/green7.png", isSelected: 'card-slot', color: "green", number: 7},
  { src: "/Images/green8.png", isSelected: 'card-slot', color: "green", number: 8},
  { src: "/Images/green9.png", isSelected: 'card-slot', color: "green", number: 9},
  { src: "/Images/green10.png", isSelected: 'card-slot', color: "green", number: 10},

];

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get("/card", function(req, res) {
  const card = cards.splice(Math.floor(Math.random() * cards.length), 1)[0];
  res.send(card);
});
let port = 3001
app.listen(port, function() {
 console.log("Server started successfully");
});

