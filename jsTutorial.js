console.log(22 + 88);
// primitive types / value types
//string
let x = "sanjana";
console.log(x);
console.log(typeof x);

//number
let y = 1;
console.log(y);
console.log(typeof y);

let z = 1.4;
console.log(z);
console.log(typeof z);

// boolean
let p = true;
console.log(p);
console.log(typeof p);

// undefined is the default value
// although it will not throw any error but it is not a good practise

let a = "sanjana";
console.log(a);
console.log(typeof a);
a = undefined;
console.log(typeof a);

// if somehow in future you want the value to be empty
// just use "null"
// type is "object"
// by default the value to any variable is "undefined"
// you are not supposed to use the keyword "undefined"
// still if you want to tell that this and that variable is "undefined"
// assign it to null

// have you notced that you are hanging the value of variable,
// that's why it is said that javascript is a dynamic language
// while c++, java, go, c# are static language
// in these you can change the value like x = 4 to x = 6
// but you can not change the type
// means if some variable have a type int, string you can not change it

/////   REFERENCE TYPES  - Objects, Arrays, Functions  /////
// Group all the properties is it what an object does
// Collection of key value pairs
console.log("hello");
let course = {
  title: "DSA",
  description: "All about logic, maths and implementation",
  ratings: 5,
};

console.log(course);
console.log(typeof course);
console.log(course.title); // .notation method
console.log(course["title"]); // bracket notation

// VALUE TYPES VS REFERENCE TYPES
// primitive data types store value
// non- primitive data types store address
// shallow & deep copy concept

let b = "sanjana";
let c = b;

b = "sandhya";
console.log(b);
console.log(c);

let pa = { name: "kartik" };
let q = pa;

pa.name = "system";

console.log(pa); // systemm
console.log(q); // system

// ARRAYS
// we put in a list and access them using numeric indices
let courses = ["kia", "seltos", "maruti"];
console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);
// In other languages, like c++, java the type has to be same
// but in javascript, both length & type can be dynamic
// Arrays and Functions are actually objects

console.log(courses); // you can log the entire courses

// FUNCTIONS
// whenever you have to use a task again and again you can simply create a function

function createCourse(coursename) {
  console.log("creating" + coursename);
}

createCourse("maruti");
createCourse("suzuki");

// HOISTING
// YOU CAN ACCESS VAR NOT LET & CONST
// abe to access the variable even before declaring it

console.log(abc); // undefined
var abc = 10;
console.log(abc); // 10

// How JS code is executed (Execution Context)
// initially there is a global execution context created which people also say GEC
// everytime you create a new function it is called "New Execution Context" and this will be added to the call stack
// it also has 2 main components
// first one is before running the code, where memory is allocated called memory phase, that's why it is known as VARIABLE ENVIRONMENT.
// in secone one, code runs line by line, that's why JS called "Synchronous Single Threaded Language" that's why second phase known as CODE PHASE.
//  concept of being able to access and extract variable an dfunction before initiallising them before putting values to them is called HOISTING.

// This & Window //
console.log(ax);
var ax = 10;
console.log(ax); // refering to the global object
console.log(this.a);
console.log(window.a);
console.log(windoe);
console.log(this === window); // output will be true

// let, const, var
// 3 ways to declare variables
// const & let are more strict than var they won't let you access them before
// when you want value can't be change use const
// when you want value can be change use let
// avoid using var at all

// TEMPORAL DEAD ZONE //
// in simpler terms there's a period called "REFERENCE ERROR", this error will be shown on console
// declare your variable at the top of the code to avoid temporal dead zone

// const & let are basically block scoped
// where ever you put curly braces that's block scoped { }
// even in conditions and wherever you put curly braces that's also blocked scope.

{
  let w = 10;
  const m = 20;
  var n = 70;
  console.log(w); // can access this
  console.log(m); // can access this
}

console.log(w); // can not access this, u will get error
console.log(m); // can not access this, u will get error
console.log(n); // can access this
// var is considered function scoped

// LEXICAL SCOPE //
function hello() {
  let sa = 10;
  console.log(sa);
}

let sa = 100; // here we can access from global to local but not vice versa
hello();
// in the above one it is only going to check inside sa
// but when it won't be there then it is going to come outside and check the outer one, which is called outer scope.

// Effects of functions is called "First class citizens"
// functions in javascript can assigned to variables
// also be passes as arguments
// they can also be returned
// they can also be stored in data structure

function add(a, b) {
  return a + b;
}

console.log(add); // output add(a, b)
console.log(add(2, 3));

// assigned function as variable

let sum = function (a, b) {
  return a + b;
};

console.log(sum); // output add(a, b)
console.log(sum(2, 3));

// pass function as an argument

function operate(operationFunc, a, b) {
  return a - b;
}
console.log(operate(sum, 2, 3));
console.log(operate(diff, 2, 3));

// all functions are called first class citizens in javascript

// higher order function
// a higher order function is a function that takes one or more
// functions as arguments, or returns a function as its result.
// here in the above code "operate" is taking up a function as an argument, that's why here it is a higher order function.

// Arrow function

let addition = (a, b) => {
  return a + b;
};

// other way is below //

let addition2 = (a, b) => a + b; // there's no need for return function when there's only one line of return code

// functions being returned from other functions
// outer function
function outer() {
  function inner() {
    console.log("hello");
  }
  return inner;
}
let returnedFuncVar = outer();
console.log(returnedFuncVar);
returnedFuncVar();
// there's a difference between returned and called
// inner function was not called it was just returned
// function + lexical scope = known as closure
// lexical scope has reference to all the variables
// closures are function with its lexical scopes
// keep creating functions, over consumption of memory endup having memory leaks.

// operate is also a higher order function
// single threaded
// is it inefficient ?
// non blocking behaviour & asynchronous operatons
// get this data and when getting that data done you can handle that
// most efficient way to do so is using "CALLBACKS"

// CALLBACKS
function fetchData(callback) {
  setTimeout(() => {
    let data = "fetched data";
    console.log(data, null);
  }, 5000);
}
function handleData(dat, error) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
}
console.log("start");
fetchData(handleData);
// we put settimeout in miliseconds
// once you recieve the data you handle it, called callback
// called after some operation succesfully called
// to be called after some operation finished

// EVENT QUEUE & EVENT LOOP
// whenever you register a callback, the opertauon is put into event queue
// it checks whether the task is finished or what
// suppose you have put the time for 5 sec but the programme is takimg 6-7 sec, so why?
// basiclaly coz there's an queue which is having something else to handle so first it is handling that part, then taking your timer function.

// problems with callback
// below mentioned is called CALLBACKHELL OR PYRAMID OF DOOM
// coz it is saying to do this before this and do that after that
// callbackhell is to handle async

asyncOperation1(arg1, (result1) => {
  asyncOperation2(result1, (result2) => {
    asyncOperation3(result2, (result3) => {
      asyncOperation4(result3, (result4) => {});
    });
  });
});

// for these to handle we have PROMISE
// coz above coe is not even readable
// not readable, not maintainable

// INVERSION OF CONTROL
// U r giving the control of calling ur callback  to another function

// PROMISES
// state of the object (complete, fullfill, pending)
// going to happen
// 3 state (1. pending 2.fullfill 3. rejectes)

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data fetched");
    }, 5000);
  });
}

getData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// it is easy to read, and also we can change it easily.
// u hve sequential operation one by one
// u hve chain over here
// reeturning a promise

// when u say then result u see the resolve one
// when u say .catch u see the reject one

// MAP
const nums = [1, 2, 3, 4, 5];
console.log(nums);
nums.map((num) => 2 * num);
console.log(doubledNums);

// should get anothr array with updated values multiplied by 2

// FILTER
// similar to map just filters out the desired or asked value that's it

// REDUCE
// reduce this we do something to get in only one value '
// example [2, 3, 4, 5] which will become [14]

// for this we have accumulator the place where we r going to store the sum
// num, which is the current value
