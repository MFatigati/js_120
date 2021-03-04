/* Tic Tac Toe is a 2-player board game.
The board is a 3x3 grid.
Players take turns marking a square with a marker that identifies the player.
Traditionally, the player to go first uses the marker X to mark her squares, and
  the player to go second uses the marker O.
The first player to mark 3 squares in a row with her marker wins the game.
A row can be a horizontal row, a vertical column, or either of the two diagonals
  (top-left to bottom-right and top-right to bottom-left).
There is one human player and one computer player.
The human player always moves (places a marker) first in the initial version of
  our game; you can change that later. */

// Game (n)
// Board (n)
// Row (n)
// Square (n)
// Marker (n)
// Player (n)
// Mark (v)
// Play (v)
// Human (n)
// Computer (n)

let readline = require("readline-sync");

class Square {
    static UNUSED_SQUARE = " ";
    static HUMAN_MARKER = "X";
    static COMPUTER_MARKER = "O";

    constructor(marker = Square.UNUSED_SQUARE) {
      this.marker = marker;
    }

    setMarker(marker) {
      this.marker = marker;
    }

    toString() {
      return this.marker;
    }

    getMarker() {
      return this.marker;
    }

    isUnused() {
      return this.marker === Square.UNUSED_SQUARE; // because each Square object has a marker
    }
}

class Board {
  constructor() {
    this.squares = {};
    for (let counter = 1; counter <= 9; counter += 1) {
      this.squares[counter] = new Square();
    }
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }

  displayWithClear() {
    console.clear();
    console.log("");
    this.display();
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
    // because each of these is a Square object (see constructor)
    // you are able to call the setMarker method on them
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  countMarkersFor(player, keys) { // keys will be one of the winning three combinations
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
      // checks current board object to get marker for square corresponding to
      // the current number in the winning combos array, then checks to see if
      // that marker is the player's marker who we are checking
    });

    return markers.length;
  }

  joinOr(inputArr, delimeter = ",", finalDelimeter = "or") {
    delimeter = delimeter.trim() + " ";
    finalDelimeter = finalDelimeter.trim() + " ";

    if (inputArr.length <= 2) {
      finalDelimeter = " " + finalDelimeter;
      return inputArr.join(finalDelimeter);
    } else {
      let firstPart = inputArr.slice(0, inputArr.length - 1).
        join(delimeter) + delimeter;
      return firstPart + finalDelimeter + inputArr[inputArr.length - 1];
    }
  }

  reset() {
    this.squares = {};
    for (let counter = 1; counter <= 9; counter += 1) {
      this.squares[counter] = new Square();
    }
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

    static POSSIBLE_WINNING_ROWS = [
      [ "1", "2", "3" ],            // top row of board
      [ "4", "5", "6" ],            // center row of board
      [ "7", "8", "9" ],            // bottom row of board
      [ "1", "4", "7" ],            // left column of board
      [ "2", "5", "8" ],            // middle column of board
      [ "3", "6", "9" ],            // right column of board
      [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
      [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
    ];

    playOneGame() {
      while (true) {
        this.humanMoves();
        if (this.gameOver()) break;

        this.computerMoves();
        if (this.gameOver()) break;

        this.board.displayWithClear();
      }
    }

    play() {
      this.displayWelcomeMessage();
      this.board.display();

      while (true) {

        this.playOneGame();

        this.board.displayWithClear();
        this.displayResults();
        if (!this.playAgain()) break;

        this.board.reset();
        this.board.displayWithClear();
      }

      this.displayGoodbyeMessage();
    }

    displayWelcomeMessage() {
      console.clear();
      console.log("Welcome to Tic Tac Toe!");
    }

    displayGoodbyeMessage() {
      console.clear();
      console.log("Thanks for playing Tic Tac Toe! Goodbye!");
      console.log(" ");
    }

    displayResults() {
      if (this.isWinner(this.human)) {
        console.log("You won! Congratulations!");
      } else if (this.isWinner(this.computer)) {
        console.log("I won! I won! Take that, human!");
      } else {
        console.log("A tie game. How boring.");
      }
    }

    isWinner(player) {
      return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
        return this.board.countMarkersFor(player, row) === 3;
      });
    }

    humanMoves() {
      let choice;

      while (true) {
        let validChoices = this.board.unusedSquares();
        console.log(`Choose a square: ${this.board.joinOr(validChoices)}`);
        choice = readline.prompt();

        if (validChoices.includes(choice)) break;

        console.log("Sorry, that's not a valid choice.");
        console.log("");
      }

      this.board.markSquareAt(choice, this.human.getMarker());
      // accessing the Board object on TTTGame, which has access
      // to the markSquareAt method, which itself calls
      // setMarker on the Square objects that populate the Board
    }

    computerMoves() {
      let validChoices = this.board.unusedSquares();
      let choice = this.computerReturnSquareToWin();
      if (!choice) {
        choice = this.computerReturnThreatenedSquare();
      }
      if (!choice && this.isFiveAvailable()) {
        choice = ['5'];
      }
      if (!choice) {
        do {
          choice = Math.floor((9 * Math.random()) + 1).toString();
        }
        while (!validChoices.includes(choice));
      }
      this.board.markSquareAt(choice, this.computer.getMarker());
    }

    computerReturnThreatenedSquare() {
      let threatenedSquare;
      TTTGame.POSSIBLE_WINNING_ROWS.forEach(row => {
        if (this.board.countMarkersFor(this.human, row) === 2) {
          row.forEach(square => {
            if (this.board.unusedSquares().includes(square)) {
              threatenedSquare = square;
            }
          });
        }
      });
      return threatenedSquare;
    }

    computerReturnSquareToWin() {
      let squareToWin;
      TTTGame.POSSIBLE_WINNING_ROWS.forEach(row => {
        if (this.board.countMarkersFor(this.computer, row) === 2) {
          row.forEach(square => {
            if (this.board.unusedSquares().includes(square)) {
              squareToWin = square;
            }
          });
        }
      });
      return squareToWin;
    }

    isFiveAvailable() {
      if (this.board.squares["5"].getMarker() === this.human.getMarker() ||
          this.board.squares["5"].getMarker() === this.computer.getMarker()) {
        return false;
      } else return true;
    }

    gameOver() {
      return this.board.isFull() || this.someoneWon();
    }

    someoneWon() {
      return this.isWinner(this.human) || this.isWinner(this.computer);
    }

    playAgain() {
      console.log(" ");
      let choice = readline.question(`Do you want to play again? (y/n)`);
      while (choice !== "y" && choice !== "n") {
        choice = readline.question(`Invalid choice. Please enter 'y' or 'n'`);
      }
      return choice === 'y';
    }
}

let game = new TTTGame();
game.play();