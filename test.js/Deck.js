class Card {
  contructor(val, suit) {
    this.val = val;
    this.suit = suit;
    this.name = name;
  }
  show() {
    console.log(`This card has a value of ${this.val}, and is named ${this.name}`);
  }
}
let bob = new Card("painter", "bob ross", "good guy");
bob.show();


class Deck {
  constructor() {
    this.cards = this.reset();
  }
  reset() {
    ["Hearts", "Diamonds", "Clubs", "Spades"].forEach(suit => {
      [
        "Ace",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
        "Ten",
        "Jack",
        "Queen",
        "King"].forEach((card, idx) => {result.push(new Card(suit, card, idx + 1));});
    });
    return reset();
  }
}
console.log(new Deck());

// shuffle((num = 7));
// {
//   while (num > 0)
//     for (let i = this.cards.length - 1; i > 0; i--) {
//       //    Math.floor(Math.random()*(max-min+1)+min)
//       let rdx = Math.floor(Math.random() * (i - 0 + 1));
//       //   swap i and rdx
//       let t = this.cards[rdx];
//       this.cards[rdx] = this.cards[i];
//       this.cards[i] = t;
//     }
//   num--;
// }
// deal();
// {
//   return this.cards.pop();
// }
// let bill = new Deck();
// console.log(bob.deal());



// class Player {
//   contructor(name, deck = new Deck()) {
//     this.name = name;
//     this.hand = [];
//     let num = 7;
//     while (num-- > 0) {
//       this.draw(deal());
//     }
//   }

//   draw(deck) {
//     this.hand.push(deck.deal());
//   }

//   discard() {
//     return this.hand.pop();
//   }
// }

// let rob = new Player("rob");
// console.log(rob.discard());
// console.log(rob);
