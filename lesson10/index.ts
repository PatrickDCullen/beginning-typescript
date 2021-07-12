interface Box<Contents> {
  contents: Contents;
}

const boxOfStrings: Box<string[]> = {
  contents: ["hello", "Laracasts!"],
};

const boxOfString: Box<string> = {
  contents: "hello",
};

const boxOfNumbers: Box<number[]> = {
  contents: [1, 2, 3, 4],
};

const identity = <T>(x: T): T => x;

const randomElement = <T, U>(xs: T[], ys: U[]): T | U => {
  const randomIndex = Math.floor(Math.random() * xs.length);
  const useX = Math.random() < 0.5;
  return useX ? xs[randomIndex] : ys[randomIndex];
};

const a = randomElement(["a", "b", "c"], [1, 2, 3, 4]);
