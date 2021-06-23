//  Any vs. Unknown
// const logger2 = (something: unknown): void => console.log(something);
// logger2("Laracasts Rules!");
// logger2({ foo: "bar" });

// const logger2 = (something: any): void => {
//   if (typeof something === "string") {
//     console.log(something.toUpperCase());
//   } else {
//     console.log(something);
//   }
// };

// logger2("Laracasts Rules!");
// logger2({ foo: "bar" });

type anyType = { prop1: any; prop2: any };
const anyFoo: anyType = {
  prop1: "hello",
  prop2: { foo: "bar" },
};

// console.log(anyFoo.prop2.whateverIwantBecauseWeHaveTurnedOffTS.sososos);

type unknownType = { prop1: unknown; prop2: unknown };
const unknownFoo: unknownType = {
  prop1: "hello",
  prop2: { foo: "bar" },
};

if (
  unknownFoo.prop2 && // check is not undefined
  typeof unknownFoo.prop2 === "object" && // check is an object
  Object.hasOwnProperty.call(unknownFoo.prop2, "foo")
) {
  const a = (unknownFoo.prop2 as { foo: unknown }).foo;
  if (typeof a === "string") {
    console.log(a.toUpperCase());
  } else {
    console.log(a);
  }
}

const canvas = document.getElementById("my_canvas");
