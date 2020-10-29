//JavaScript Variable

/* A JavaScript variable is simply a name of storage
    location.There are two types of variables in JavaScript
    :- local variable & global variable. 

There are some rules while declaring a JavaScript variable:
    1.Names can contain letters, digits, underscores, and dollar signs.  
    2.Names must begin with a letter
    3.Names can also begin with $ and _ (but we will not use it in this tutorial)
    4.Names are case sensitive (y and Y are different variables)
    5.Reserved words (like JavaScript keywords) cannot be used as names
*/

var x = 10;
var _value = "hello";


/*
JavaScript local variable:
    A JavaScript local variable is declared inside block or function.
    It is accessible within the function or block only.
*/

function abc() {
    var y = 10; // local variable
}


/*
JavaScript global variable:
    A JavaScript global variable is declared outside the function or 
    declared with window object. It can be accessed from any function.
*/

var value = 200; //global variable
function a() {
    console.log(value);
}

function b() {
    console.log(value + value);
}
a(); // Calling JavaScript Function 
b();


/*
There are following types of operators in JavaScript:
    1.Arithmetic Operators
    2.Comparison (Relational) Operators
    3.Bitwise Operators
    4.Logical Operators
    5.Assignment Operators
    6.Special Operators      (?:) , delete in instanceof new typeof void yield etc.
*/

//Type Conversion with truthy falsy value


var str = 100;
var n = 10;
console.log(str * n); // 1000
console.log(str + n); // 110
console.log(Number.parseInt(str)); // string to number
console.log(n.toString); // Number to string

console.log(Boolean(Infinity)); // infinity to boolean

/* Falsy Value: 0, null. undefine, NaN  */




// JavaScript Switch

switch (x) {
    case 10:
        console.log(x);
        break;
    default:
        break;
}

/*
There are four types of loops in JavaScript:
    for, while, do-while, for-in loop

*/

var student = { name: "Bill", age: 25, degree: "Masters" };
for (var item in student) {
    console.log(student); // => "Bill", then 25, then "Masters"
    console.log(student[item]);
}

//JavaScript Functions

function hello() {
    console.log("Hello");
}

function sum(a, b) {
    console.log(a + b);
}

function mul(a, b) {
    return a * b;
}

hello();
sum(5, 6);
console.log(mul(4, 5));