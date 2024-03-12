// ex13

function identity<T>(arg: T): T {
  console.log("type of " + arg + " is : " + typeof arg);
  return arg;
}

console.log(identity<boolean>(true)); // true, typeof true is boolean
console.log(identity<number>(2)); // 2, typeof 2 is number
console.log(identity<string>("hello world!")); // "hello world" typeof "hello world" is string

// ex14

interface GenericIdentityFn<T> {
  (arg: T): T;
}

const implementString: GenericIdentityFn<string> = function <T>(arg: T): T {
  return arg;
};

console.log(implementString("Oualid")); // "Oualid"

interface GenericArray<T> {
  numbers: T[];
}

let numberArray: GenericArray<number> = { numbers: [1, 2, 3, 4] };
console.log(numberArray.numbers); // [ 1, 2, 3, 4 ]
