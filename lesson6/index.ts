// Ep 7: Interfaces and Type Aliases
interface User {
  id: string;
  name: string;
}

type OtherUser = {
  id: string;
  name: string;
};

const user1: User = {
  id: "1",
  name: "Michael",
};

const user2: OtherUser = {
  id: "1",
  name: "Michael",
};

console.log(user1, user2);

// UNION
type Suit = "CLUBS" | "DIAMONDS" | "HEARTS" | "SPADES";
const card: Suit = "HEARTS";
console.log(card);

// INTERSECTION
interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
}

type PersistedUser = User & Timestamps;
const persisted: PersistedUser = {
  id: "uuid-1",
  name: "Michael",
  createdAt: new Date(),
  updatedAt: new Date(),
};

console.log(persisted);

// RENAMING PRIMITIVES
type customString = string;
const nice: customString = "not bad kid.";
console.log(nice);

type Heart = "HEARTS";

// Declaration Merging
interface MergeUser {
  id: string;
  name: string;
}

interface MergeUser {
  age: number;
}

const merged: MergeUser = {
  id: "1",
  name: "Michael",
  age: 29,
};
console.log(merged);
