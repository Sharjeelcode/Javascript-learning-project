// strings
// const firstName = " Sharjeel";
// const lastName = "Ahmed";

// console.log(`My name is ${firstName} ${lastName}`);

// console.log(firstName.includes("S"));
// console.log(firstName.length);
// console.log(firstName.toLocaleUpperCase());
// console.log(firstName.charAt(2));
// console.log(firstName.indexOf("S"));
// console.log(firstName.substring(0, 4));
// console.log(firstName.slice(-8, 4));
// console.log(firstName.trim());

// const email = "sharjeel%20@gmail.com";

// console.log(email);
// console.log(email.replace("%20", ""));
// console.log(email.includes("%"));
// const arr = email.split("");
// console.log(arr);

// console.log(arr.join("").replace("%20", ""));

// Number

const num = new Number(100);

// const n = 122.39087;
// console.log(n.toPrecision(4));

// const hundrads = 10000000;
// console.log(hundrads.toLocaleString("en-PK"));

// // MATHS;

// const math = Math.floor(Math.random() * 10);
// console.log(math);

// // DATE Object

const date = new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.toDateString());
// console.log(date.toString());
// console.log(date.toString());
// console.log(date.toLocaleDateString());
// console.log(date.getHours());
// console.log(date.getMinutes());

// let myCreatedDate = new Date();

// let newdate = date.toLocaleString("default", {
//   weekday: "long",
//   hour: "numeric",
//   minute: "numeric",
//   hour12: num,
// });

// console.log(newdate);

// Arrays

// const arr = [1, 2, 3, 4, 5];

// let copy = [...arr];
// copy.shift();

// copy.pop();
// copy.unshift(5, 44, 4, 4);
// console.log(copy);
// console.log(copy.indexOf(4));

// console.log(copy.join(""));

// slice and splice

// const array = [1, 2, 3, 4, 5, 6, 7, 8];

// const ar = array.splice(1, 3);

// console.log(ar);

// console.log(array);

// const slice = [1, 2, 3, 4, 5];

// const s = slice.slice(1, 3);
// console.log(s);

const myArr = [1, 2, 3, 4, 5];

// myArr.map((arr) => {
//   console.log(arr);
// });

// myArr.filter((arr) => {
//   if (arr < 5) {
//     console.log("yes");
//   } else {
//     console.log("fuck");
//   }
// });

// const arr = ["herro", "zero"];
// const brr = ["bero", "dero"];
// const output = [...arr, ...brr];
// console.log(output);

// const combo = [1, 2, 34, [2, 3, 4, [23, 4, 5]]];

// console.log(combo.flat(Infinity));

// let num1 = 100;
// let num2 = 200;
// let num3 = 300;

// console.log(Array.of(num1, num2, num3));

// Objects

// const object = {
//   name: "sharjeel",
//   language: "javascript",
//   email: "sharjeel@gmail.com",
// };

// object.name = "herry";

// console.log(object);
// // Object.freeze(object);
// object.greetings = function () {
//   console.log(`my name is ${this.name}`);
// };
// console.log(object.greetings());

const newObj = {
  name: "sharjeel",
  userfullname: {
    username: {
      firstname: "sharjeel",
    },
  },
};

// console.log(
//   newObj.userfullname.username.firstname
//     ? newObj.userfullname.username.firstname
//     : "nulll"
// );

// console.log(Object.entries(newObj));
// console.log(newObj.hasOwnProperty("name"));

// const userData = {
//   users: "sharjeel ahmed",
//   price: 99,
// };

// const { price: myprices } = userData;

// console.log(myprices);

// // functions

// function firstFunc(num) {
//   num > 5 ? console.log("greater") : console.log("lower");
// }

// firstFunc(23);

// (() => {
//   console.log("helloworld");
// })();

// function addN(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }
// console.log(addN(2, 7));

// // rest operTOR

// function nums(...num) {
//   return num;
// }

// console.log(nums(100, 200, 300, 400));

// arrow function

// const chai = () => {
//   console.log("hello world");
//   console.log(this);
// };

// chai();

// function user() {
//   let user = "hello";
//   console.log(this.user);
//   console.log(this);
// }

// user();

// const addTwo = (num1, num2) => num1 + num2;

// console.log(addTwo(1, 4));

// const returnObject = () => ({ user: "hello" });
// console.log(returnObject());

// // IIFE

// (() => {
//   console.log("hello world");
// })();
// (() => {
//   console.log("second");
// })();

// // Named IIFE

// (function hello() {
//   console.log("Named IIFE");
// })();

// if else

// const login = true;
// const logout = false;

// if (login || logout) {
//   console.log("hello world");
// } else {
//   console.log("bye world");
// }

// switch case

// const number = 22;

// switch (number) {
//   case 22:
//     console.log(`value is ${number}`);
//     break;
//   case 20:
//     console.log(`value is not ${number}`);
//   case 19:
//     console.log(`value is not ${number}`);
//   case 21:
//     console.log(`value is not ${number}`);
//   default:
//     console.log("program exicuted");
// }
// const data = { name: "herry" };

// if (Object.keys(data).length === 0) {
//   console.log("object is emptys");
// } else {
//   console.log("object is not empty");
// }

// let price = 22;

// price >= 23
//   ? console.log("price is greater then 20")
//   : console.log("price is less then 22");

// for loops

// for (let i = 1; i <= 10; i++) {
//   if (i <= 5) {
//     console.log(i);
//   }
// }

// while loop
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i = i + 2;
// }

// let array = ["aa", "bb", "cc", "dd"];
// let arr = 0;
// while (arr < array.length) {
//   console.log(`value is ${array[arr]}`);
//   arr++;
// }

// do while loop
// let score = 1;
// do {
//   console.log(`score is ${score}`);
//   score++;
// } while (score <= 10);

// higher order lopps

const greetings = "hello world";

// for (const greet of greetings) {
//   console.log(`Each Character of Greeting is ${greet}`);
// }

// maps

const languages = {
  cpp: "c+=",
  js: "javascript",
  rb: "rubby on rails",
  py: "python",
};

// for (const key in languages) {
//   console.log(`${key} is full form of ${languages[key]}`);
// }

// const array = ["aa", "bb", "cc", "dd"];

// array.forEach((array) => {
//   console.log(array);
// });

// const database = [
//   {
//     name: "herry",
//     fname: "cherry",
//   },
//   {
//     name: "baby",
//     fname: "doll",
//   },
//   {
//     name: "good",
//     fname: "news",
//   },
// ];

// database.forEach((data) => {
//   console.log(`name is ${data.name} & fatherName is ${data.fname}`);
// });

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newNums = mynums.filter((data) => {
//   return data >= 3;
// });

// let newNums = mynums
//   .map((num) => {
//     return num + 10;
//   })
//   .map((num) => {
//     return num - 5;
//   })
//   .filter((num) => {
//     return num > 10;
//   });

let newNums = mynums.reduce((reduce, acc) => {
  console.log(reduce);

  return reduce + acc;
}, 0);

console.log(newNums);
