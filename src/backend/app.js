const express = require("express");
const app = express();

const cards = [
  { id: 1, src: "../Images/blue2.png", isSelected: 'card-slot', color: "blue", number: 2},
  { id: 2, src: '../Images/blue7.png', isSelected: 'card-slot', color: "blue", number: 7},
];

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get("/card", function(req, res) {
  res.send(cards.pop());
});
let port = 3001
app.listen(port, function() {
 console.log("Server started successfully");
});

