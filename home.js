console.log('hello');
// alert('hello this is Qazi');

// How to write a comment inline

// Variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

// var age = this.prompt('What is your age?');
// document.getElementById('someText').innerHTML = age;  

// Numbers in Javascript
var num1 = 10;

// Increment num1 by 1
num1++;

// Decremnt num1 by 1 
num1--;
console.log(num1);

// Divide, multiply *, remainder %
console.log(num1 % 6);

// Increment/decrement by 10
num1 += 10;
console.log(num1);

/* Functions
1. Create a function
2. Call the function
*/

// Create
function fun() {
    console.log('this is a function');
}

// Call
fun();

/* Let's create a function that take in a name
and says hello followed by your name

for example

Name: "Ging"
Return: "Hello Qazi"
*/ 

function greeting() {
    var name = prompt('What is your name?');
    var result = 'Hello'+ ' ' + name; // String Concatenation
    console.log(result);
}

greeting();


