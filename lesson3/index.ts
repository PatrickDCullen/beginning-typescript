// Literal Type
const flipCoin = () => (Math.random() < 0.5 ? "Head" : "Tail");
console.log(flipCoin());

enum Suit {
  HEARTS,
  SPADES,
  DIAMONDS,
  CLUBS,
}

// type Suit = "hearts" | "spades" | "diamonds" | "clubs"; // Literal type with unions
// console.log(Suit.SPADES);

const suitMeaning = (suit: Suit) => {
  if (Suit.HEARTS === suit)
    return "The clergy and the struggle to achieve inner joy";
  if (Suit.SPADES === suit)
    return "The warrior class institutionalized into the nobility, and the fractious problems of life";
  if (Suit.DIAMONDS === suit)
    return "The merchant class and the excitement of wealth creation";
  if (Suit.CLUBS === suit) return "The peasantry and achievement through work";
};

console.log(suitMeaning(Suit.CLUBS));
