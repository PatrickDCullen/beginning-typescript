//  Void, Null, Undefined
const logger = (something: unknown): void => console.log(something);
const a = logger("Laracasts Rules!");
// console.log("a = ", { a });

interface User {
  id: string;
  email: string;
  name: string | null;
  age?: number;
}

const createUser = (email: string): User => ({
  id: "new-uuid",
  email,
  name: null,
});

const user = createUser("hello@email.com");
user.age = 30;
