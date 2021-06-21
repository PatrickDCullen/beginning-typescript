const greeting: string = "Hello, Laracasts!";

const year: number = 2021;

// Typescript will yell if you call a variable as a function
// greeting();

// The following is fine because you can concatenate a number to a string in JS
// const b = greeting + 1;

// This will throw an error because adding a number to a string in JS gives a string,
// which doesn't match with the type of number on our variable declaration
// const b: number = greeting + 1;

// This throws an error because the method we are calling on year doesn't exist on something with a type of number
// year.toLowerCase();

// I tried to misspell the function as toLowercase (which TS gives useful hints for) but VS Code went ahead
// and fixed the casing automatically, which is even more impressive.
// greeting.toLowerCase();

// function arguments follow the same type checking syntax. The third : number is for what type the function is expected to return.
const addTwoNumbers = (a: number, b: number): number => a + b;

// old function/ non-arrow function syntax:
function addTwoNumbersOld(a: number, b: number): number {
  return a + b;
}

interface User {
  id: string;
  name: string;
}

interface Book {
  id: string;
  name: string;
  releaseDate: Date;
}

// with a function that returns an object, the return type is both the object as well as the properties and their types
const getUserById = (id: string): User => ({
  id,
  name: "Patrick Cullen",
});

const getBookById = (id: string): Book => ({
  id,
  name: "TS is great.",
  releaseDate: new Date(),
});

// types "follow through", meaning that since the return type is on the getUserById function,
// TS knows that user will be an object with an id that is a string and a name that is a string.
// This is called type inference.
const user = getUserById("uuid-1");
const book = getBookById("uuid-1");

const saveUser = (user: User) => console.log("saving user", { user });
const saveBook = (book: Book) => console.log("saving book", { book });

saveUser(book);
saveBook(book);
saveUser(user);
saveBook(user);
