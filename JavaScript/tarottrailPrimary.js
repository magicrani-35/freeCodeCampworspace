const theFool = 'The Fool';
const theMagician = 'The Magician';
const theHighPriestess = 'The High Priestess';
const theEmpress = 'The Empress';
const theEmperor = 'The Emperor';
const theHierophant = 'The Hierophant';
const theLovers = 'The Lovers';
const theChariot = 'The Chariot';
const strength = 'Strength';
const theHermit = 'The Hermit';
const wheelOfFortune = 'Wheel of Fortune';
const justice = 'Justice';
const theHangedMan = 'The Hanged Man';
const death = 'Death';
const temperance = 'Temperance';
const theDevil = 'The Devil';
const theTower = 'The Tower';
const theStar = 'The Star';
const theMoon = 'The Moon';
const theSun = 'The Sun';
const judgement = 'Judgement';
const theWorld = 'The World';

const majorArcana = [
  theFool,
  theMagician,
  theHighPriestess,
  theEmpress,
  theEmperor,
  theHierophant,
  theLovers,
  theChariot,
  strength,
  theHermit,
  wheelOfFortune,
  justice,
  theHangedMan,
  death,
  temperance,
  theDevil,
  theTower,
  theStar,
  theMoon,
  theSun,
  judgement,
  theWorld
];

console.log(majorArcana);

console.log(`There are ${majorArcana.length} cards in the Major Arcana.`);

const aceofWands = 'Ace of Wands';
const twoofWands = 'Two of Wands';
const threeofWands = 'Three of Wands';
const fourofWands = 'Four of Wands';
const fiveofWands = 'Five of Wands';
const sixofWands = 'Six of Wands';
const sevenofWands = 'Seven of Wands';
const eightofWands = 'Eight of Wands';
const nineofWands = 'Nine of Wands';
const tenofWands = 'Ten of Wands';
const pageofWands = 'Page of Wands';
const knightofWands = 'Knight of Wands';
const queenofWands = 'Queen of Wands';
const kingofWands = 'King of Wands';

const wands = [
  aceofWands,
  twoofWands,
  threeofWands,
  fourofWands,
  fiveofWands,
  sixofWands,
  sevenofWands,
  eightofWands,
  nineofWands,
  tenofWands,
  pageofWands,
  knightofWands,
  queenofWands,
  kingofWands
];

console.log(wands);

console.log(`There are ${wands.length} cards in the suit of Wands.`);

const aceofCups = 'Ace of Cups';
const twoofCups = 'Two of Cups';
const threeofCups = 'Three of Cups';
const fourofCups = 'Four of Cups';
const fiveofCups = 'Five of Cups';
const sixofCups = 'Six of Cups';
const sevenofCups = 'Seven of Cups';
const eightofCups = 'Eight of Cups';
const nineofCups = 'Nine of Cups';
const tenofCups = 'Ten of Cups';
const pageofCups = 'Page of Cups';
const knightofCups = 'Knight of Cups';
const queenofCups = 'Queen of Cups';
const kingofCups = 'King of Cups';

const cups = [
  aceofCups,
  twoofCups,
  threeofCups,
  fourofCups,
  fiveofCups,
  sixofCups,
  sevenofCups,
  eightofCups,
  nineofCups,
  tenofCups,
  pageofCups,
  knightofCups,
  queenofCups,
  kingofCups
];

console.log(cups);

console.log(`There are ${cups.length} cards in the suit of Cups.`);

const aceofSwords = 'Ace of Swords';
const twoofSwords = 'Two of Swords';
const threeofSwords = 'Three of Swords';
const fourofSwords = 'Four of Swords';
const fiveofSwords = 'Five of Swords';
const sixofSwords = 'Six of Swords';
const sevenofSwords = 'Seven of Swords';
const eightofSwords = 'Eight of Swords';
const nineofSwords = 'Nine of Swords';
const tenofSwords = 'Ten of Swords';
const pageofSwords = 'Page of Swords';
const knightofSwords = 'Knight of Swords';
const queenofSwords = 'Queen of Swords';
const kingofSwords = 'King of Swords';

const swords = [
  aceofSwords,
  twoofSwords,
  threeofSwords,
  fourofSwords,
  fiveofSwords,
  sixofSwords,
  sevenofSwords,
  eightofSwords,
  nineofSwords,
  tenofSwords,
  pageofSwords,
  knightofSwords,
  queenofSwords,
  kingofSwords
];

console.log(swords);

console.log(`There are ${swords.length} cards in the suit of Swords.`);

const aceofPentacles = 'Ace of Pentacles';
const twoofPentacles = 'Two of Pentacles';
const threeofPentacles = 'Three of Pentacles';
const fourofPentacles = 'Four of Pentacles';
const fiveofPentacles = 'Five of Pentacles';
const sixofPentacles = 'Six of Pentacles';
const sevenofPentacles = 'Seven of Pentacles';
const eightofPentacles = 'Eight of Pentacles';
const nineofPentacles = 'Nine of Pentacles';
const tenofPentacles = 'Ten of Pentacles';
const pageofPentacles = 'Page of Pentacles';
const knightofPentacles = 'Knight of Pentacles';
const queenofPentacles = 'Queen of Pentacles';
const kingofPentacles = 'King of Pentacles';

const pentacles = [
  aceofPentacles,
  twoofPentacles,
  threeofPentacles,
  fourofPentacles,
  fiveofPentacles,
  sixofPentacles,
  sevenofPentacles,
  eightofPentacles,
  nineofPentacles,
  tenofPentacles,
  pageofPentacles,
  knightofPentacles,
  queenofPentacles,
  kingofPentacles
];

console.log(pentacles);

console.log(`There are ${pentacles.length} cards in the suit of Pentacles.`);

const tarotDeck = majorArcana.concat(wands, cups, swords, pentacles);

console.log(tarotDeck);

console.log(`There are a total of ${tarotDeck.length} cards in a standard tarot deck.`);

console.log("Happy reading!");

const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

const shuffledTarotDeck = shuffleDeck(tarotDeck.slice());

console.log(shuffledTarotDeck);

const drawCards = (deck, numberOfCards) => {
  return deck.slice(0, numberOfCards);
}

const hand = drawCards(shuffledTarotDeck, 3);

console.log("Your reading:");
console.log(hand);