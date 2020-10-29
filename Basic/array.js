/* JavaScript Arrays */

/*  Creating arrays in JavaScript is easy with the array literal 
    notation. It consists of two square brackets that wrap optional 
    array elements separated by a comma. Array elements can be any 
    type, including number, string, Boolean, null, undefined, object, 
    function, regular expression and other arrays. 
*/

var empty = []; // empty array with no elements
var mixed = [true, 3.69, "kamran", undefined]; // array with elements of different types

var array2d = [
    [1, { x: 4, y: 3 }],
    [2, { x: 8, y: 9 }]
];

// console.log(array2d[0][0]);

/* Iterating over array elements */

var car = [];
car[1] = "jamal";
car[3] = "kamal";
car["six"] = "sabbir";

/* for (var i = 0; i < car.length; i++) {
    console.log(car[i]);
}

for (var index in car) {
    console.log(car[index]);
} */


/* Deleting array elements with delete */

delete car["six"]; //delete the element at index six




/* Array methods: splice(), push(), pop(), shift(), unshift() */

/*
splice():
The JavaScript array splice() method is used to add/remove 
the elements to/from the existing array. It returns the removed 
elements from an array. The splice() method also modifies the 
original array. 

The splice() method is represented by the following syntax:

array.splice(start,delete,element1,element2,?,elementn)  

Parameter:
start - It represents the index from where the method start to extract the elements.
delete - It is optional. It represents the number of elements to be removed.
element1,element2,...,elementn - It is optional. It represent the elements to be inserted.
*/

var arraySplice = ["one", "two", "three"];
arraySplice.splice(2, 0, "four");
// console.log(arraySplice);
var ar = arraySplice.splice(2, 2, "five", "six", "seven");
// console.log(ar); // delete element
// console.log(arraySplice);


/* 
Implementing a LIFO stack with push() and pop(): 

The built-in push() array method appends one or more elements to the 
end of an array, increments the length as appropriate, and returns 
the length of the modified array. The built-in pop() array method 
does the opposite; it deletes the last element, reduces the length 
by one, and returns the deleted element.

*/

var arr = [];
for (var i = 0; i < 6; i++) {
    arr.push(i);
}
arr.pop(); // value 5 delete
// console.log(arr);

/* 
Implementing a FIFO queue with: unshift() and shift()

The built-in array method unshift() inserts one or more elements to 
the beginning of an array, shifts the existing elements up to higher 
indexes to make space for the new elements, increments the length by 
the number of elements inserted, and returns the new length. The 
shift() removes the first element, shifts all the elements with higher 
indexes down one position to fill the gap, reduces the length by one, 
and returns value of the element that it removed.

*/

var array1 = [];
for (var i = 0; i < 6; i++) {
    array1.unshift(i); //inserts elements to the beginning of an array
}

// console.log(array1);
// array1.shift(); // remove first element 
// console.log(array1);


/* Manipulating arrays with map(), filter(), reduce() */

/* map():
The JavaScript array map() method calls the specified function for 
every array element and returns the new array. This method doesn't 
change the original array.

array.map(callback(currentvalue,index,arr),thisArg)
*/

var array2 = [2.6, 4.2, 6.8, 8];

var newArray = array2.map(Math.round);
var newArray1 = array2.map(x => x * 3);
var newArray2 = array2.map(function(value) {
    return value * value;
});

// console.log(array2); // orginal array
// console.log(newArray); // new array
// console.log(newArray1);
// console.log(newArray2);

/* flat() & flatMap():

   1.flat():
   The flat() method is an inbuilt array method that flattens a given 
   array into a newly created one-dimensional array. It concatenates 
   all the elements of the given multidimensional array, and flats 
   upto the specified depth. We can specify the depth limit to where 
   we need to flatten the array. By default, the depth limit is 1.

   2.flatMap():
   The flatMap() method is a combination of flat() and map() methods. 
   This method initially maps each array element through a mapping 
   function, then flatten up the array with depth value as 1.
*/

var ar1 = [1, 2, [4, 7], 8, 3, [2, 1]]; //given multidimensional array
var new_ar1 = ar1.flat(); //using flat() method  

// console.log(ar1);
// console.log(new_ar1);

var ar2 = [2, 3, 4];
var ar3 = [9, 7, 6];

var new_ar = flatMap((ar2, index) => (ar2, ar3[index]));
// console.log(new_ar);