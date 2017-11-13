var myVar;
myVar = 0;
/* $, _, a-z, A-Z, 0-9, no hypens
can't start with numbers */

// forms of data: numbers, strings, booleans, null and undefined

//Datatypes do not need to be declared using JS (like boolean, string, number)

//Javascript does not differeniate between floating point or fixed numbers


var myName = 'Jesse';
//Use single or double quotes to denote a string

var mySentence = "What's up";
//JS treats single nd double quotes the same. A double quoted string cannot contain double quotes within unless they are escaped using a \. same applies for single quoted strings. Same applies for single quoted strings. You can, however, include single quotes in a double quoted string and vice versa.

var myLongString = "This actually isn't too long.";
//Strings cannot include line breaks by default.

var myBoolean = true;
//Booleans can only be set to true or false.

//Develop tools' console is very helpful when developing in Javascipt

var numA = 14;
var numB = 27;

var sumOfAandB = numA + numB;

//Addition in JS is done with the plus symbol

numA = 32;

//This reassigns the value of numA variable to 32, this does not affect the line above, but will effect the line below;

var numAMinusNumB = numA - numB;

//Subtraction is done with the hypen;

var numC = 3 * 3;
//multiplication is done through an *

var numD = 4 / 2;
//division is done with /

var myExponent = 2 ** 4;
//exponents are done with **

var myModulus = 5 % 2;
//modulus is done with %

var myFullName = myName + ' ' + 'Azubuike';
//use + to concatenate, or add, mutiple strings together.

var me = {
  //objects are made of named key value pairs

  name: "Jesse Azubuike", //can also be set to the variable myFullName
  age: 23,
  isAwesome: true,
  head: { //head is a property object inside of the variable object me
    eyes: 2,
    hairColor:'black',
    brain: true
  }
};
//object literals are created using curly braces.
//properties on the me object would generally be accessed using dot notation. For example, me.name would return Jesse Azubuike while me.head.eyes would return 2

console.log( //logs info to console when this code is run
me.age
);

me.age = 30; //sets the age property to a value of 30

console.log(me.age);

var myArr = [55, 'Tiger', true, me];
//Arrays are key value pairs where the key is a number
//Array variables are created using array brackets and start with a 0 index. To access elements within an array, use [] with the index number, so myArr[0] would be 55.

console.log(myArr[0]);

var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday'];

me.hobbies = ['Code', 'Music', 'Food', 'Games']
//Objects can hold arrays as the value for Properties
//This adds a hobbies property to the me object, and sets it to be an array

console.log(me.hobbies[0]);

var something;
console.log(something);
//Variables declared by not given an value are undefined. The above console log will return undefined.

var nothing = null;
console.log(nothing);
//null is nothing (not 0, nothing)

function sayHello() { //This is a function declaration, creating a function called sayHello

  //The convention is as follows: function functionname (parameters) {}

  //Function declarations do not end in a semi-colon (;)

  console.log('Welcome to JavaScript City dude!');

  //statements inside of a function DO end in a semi-colon

}

sayHello(); //this calls or invokes the sayHello function.

function sayHelloTo(name) {
  // var message = 'Welcome to JavaScript City ';
  // return message + name;

  var message = 'Welcome to JavaScript ' + name + '!';
  console.log(message);

  //Variables created within a function are only available within that function. This is called function scope.
}

sayHelloTo(myFullName);

var sumNums = function (firstNum, secondNum) {
// var sum = firstNum + secondNum;
// return sum;
return firstNum + secondNum;
//the function is terminated after a return statement is triggered
};
//This is a function expression that creates a function called sumNum.

console.log(sumNums(2, 2));

var mySum = sumNums(923,13454);
 console.log(mySum);

 //Function delclaration, NOT EXPRESSIONS, are "hoisted" to the top of the document when compiled and read by the browser.

var apollo = {
  isDog: true,
  breed: 'mutt',
  legs: 4,
  age: 2,
  toys: ['Mrs. Moose', 'Bone', 'Half a Giraffe'],
  speak: function() { //this is a method, a function that is a property of an object
    console.log('woof woof');
  },
  sayHiTo: function(name, age) {
    console.log('Hi ' + name + " woof woof! You're " + age);
  }
  //With functions that use multiple parameters the order matters, supply the parameters in the same order in which the arguments are listed where the function is defined
};

apollo.speak();

apollo.sayHiTo('Stella',5);

console.log(console);
//The console object is a global object created within the browser, log is a method on that object.
