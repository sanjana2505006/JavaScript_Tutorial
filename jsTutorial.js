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
