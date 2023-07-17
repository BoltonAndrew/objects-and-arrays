let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";

// Array Literal declaration (Using square brackets)
let cars = ["Saab", "Volvo", "BMW"];

console.log(cars);
console.log(cars[0]);

// Array constructor
let numbers = new Array(1, 2, 3, 4, 5);

console.log(numbers);

const letters = [];

letters[0] = "A";
letters[1] = "B";

// Below code only works with let keyword
// letters = [...letters, "C"];

console.log(letters);

// Additional information properties/methods
console.log(letters.length);

console.log(cars.includes("volvo"));

console.log(cars.indexOf("saab"));

// Mutation methods
// CRUD - Create, Read, Update, Delete
const arr = [];
// CREATE
arr[0] = "Andy B";
arr.push("Gary B");
arr.unshift("Carly B");
// READ
console.log(arr[0]);
let lastElement = arr.pop();
console.log("Popped Item: ", lastElement);
// UPDATE
arr[0] = "Steve G";
console.log(arr);
// DELETE
arr[0] = undefined;
console.log(arr);

let anotherArr = [1, 2, "Steve", true, "12"];

let capturedValue = anotherArr.shift();

console.log(anotherArr);
console.log(capturedValue);

const fruits = ["apple", "banana", "grapes", "kiwi"];
fruits[10] = "pear";

for (let i = 0; i < fruits.length; i++) {
  console.log("1. ", fruits[i]);
}

for (let idx in fruits) {
  console.log("2. ", idx);
}

for (let fruit of fruits) {
  console.log("3. ", fruit);
}

// Objects
let car = {
  name: "Fiat",
  model: 500,
  weight: "850kg",
  color: "white",
  funToDrive: false,
  drivers: ["Andy", "Carly"],
  engine: {
    model: "1200M",
    fuelType: "Electric",
    start: function () {
      console.log(`The engine, model ${this.model} starts.`);
    },
  },
  intro: function () {
    console.log(`Hi, My name is ${this.name} and my model is ${this.model}.`);
  },
};

console.log(car);
console.log(car.engine.model);

car.intro();
car.engine.start();

let customerInput = "name";

console.log(car[customerInput]);

console.log(car.length);

for (let key in car) {
  console.log(car[key]);
}

let arrOfObj = [
  { name: "AndyB", email: "andyb@email.com" },
  { name: "CarlyB", email: "carlyb@email.com" },
];
