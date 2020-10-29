function sum(a, b) {
    return a + b;
}
var s = sum(4, 6);
// console.log(s);



function hypotenuse(a, b) { // outer function 
    function square(num) { // inner function
        return num * num;
    }
    return Math.sqrt(square(a), square(b));
}

// console.log(hypotenuse(4, 6));

/* Function expressions */

/* JavaScript also supports function expressions in which functions 
are assigned to variables */

var area = function(radius) {
    return Math.PI * radius * radius;
};
// console.log(area(5));



/* Variable scope in functions */

var num = 7; // variable is global

function showg() {
    console.log(num);
}
// showg();

function showg1() {
    var num = 3;
    console.log(num); // num is local, hides the global num 
}
// showg1();

function showg2(num) {
    console.log(num); // arguments are locally scoped
}
// showg2(6);

/* 
Unfortunately JavaScript does not support block-level scoping. 
A variable defined within a block, for instance an if- or a 
for-statement, will exist even after the block finishes execution. 
It will be available until the function in which the variable is 
declared finishes. 
*/

function noblock() {
    if (true) {
        var width = 30; // variable num is available outside the if block
    }
    console.log(width);
}
noblock();