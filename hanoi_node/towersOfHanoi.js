const readline = require('readline');

const reader = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
});

class TowersOfHanoi {
  constructor(numDisks) {
    this.board = [[],[],[]];
    this.numDisks = numDisks;
    for (let i = numDisks; i > 0; i--) {
      this.board[0].push(i);
    }
  }
}

TowersOfHanoi.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {
  const startTower = this.board[startTowerIdx];
  const endTower = this.board[endTowerIdx];
  if (startTower.length < 1) {
    console.log("There is no disk on this tower!");
    return false;
  }
  if (startTower.slice(-1)[0] > endTower.slice(-1)[0]) {
    console.log("Can't move a bigger disk on top of a smaller disk!");
    return false;
  }
  return true;
};

TowersOfHanoi.prototype.move = function (startTowerIdx, endTowerIdx) {
  const startTower = this.board[startTowerIdx];
  const endTower = this.board[endTowerIdx];
  endTower.push(startTower.pop());
};

TowersOfHanoi.prototype.print = function () {
  console.log(JSON.stringify(this.board));
};

TowersOfHanoi.prototype.isWon = function () {
  if (this.board[1].length === this.numDisks || this.board[2].length === this.numDisks) {
    return true;
  }
  return false;
};

TowersOfHanoi.prototype.promptMove = function() {
  console.log(this.board);
  reader.question("Select a tower to move from: ", function(startTowerIndex) {
    reader.question("Select a tower to move to: ", function(endTowerIndex) {
      if (this.isValidMove(startTowerIdx, endTowerIdx)) {
        this.move(startTowerIdx, endTowerIdx);
      }
    });
  });
};

TowersOfHanoi.prototype.run = function() {
  this.promptMove();
  if (!this.isWon()) {
    this.run();
  } else {
    console.log('Congrats, you won!!!');
  }
};


let myGame = new TowersOfHanoi(3);

myGame.run();


