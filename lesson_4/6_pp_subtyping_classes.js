/* class Game {
  play() {
    return 'Start the game!';
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }
  play() {
    return "Let's start!"
  }
}

console.log(Object.getOwnPropertyNames(Game.prototype)) */

// by adding `play` to Bingo, we define a new property on Bingo's
// prototype object, which overrides the Game `play` method, meaning
// that anything creating by Bingo will get that play method. This is called
// creating an instance method, as opposed to a static method

class Greeting {̃̃̃
  constructor() {
  }
  greet(str){
    console.log(str);
  }
}

class Hello extends Greeting {
  hi() {
    this.greet("Hello!");
  }
}

class Goodbye extends Greeting {
  bye(){
    this.greet("Goodbye");
  }
}

let greeting = new Goodbye;
greeting.bye();