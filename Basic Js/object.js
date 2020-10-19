/* JavaScript Objects */

/* Creating objects with object literals:

    A JavaScript object is a collection of properties where each property 
    has a name and a value, similar to Hash, Map, or Dictionary in other 
    languages. The name of a property can be any string, including an empty 
    string. The value can be any value, such as a string, Boolean, number, 
    and null, but it cannot be undefined. The object's properties can be 
    defined even after you start using the object. But first, let's look 
    at how we create objects in JavaScript.

    The easiest way is to create a new object is with object literal 
    notation which is bracketed by a pair of curly braces: {}. Properties 
    and their values can be added as you go
*/

var obj = {}; // create an empty object
//console.log(typeof obj); // variable type

obj.x = 10; // object property x
//console.log(obj);


var per = {
    name: "kamran",
    age: 26
};

per.hight = 23; // Insert new item for Object. 
per.age = 30; //modify value
//console.log(per);


var rect = {
    width: 20,
    hight: 30
};
rect.color = { red: 0, green: 255, blue: 128 }; //add new object
rect.getArea = function() {
    return this.width * this.hight;
};
/* console.log(rect);
console.log(rect.color);
console.log(rect.color.green);
console.log(rect.getArea()); */

/* 
    You can define objects and all their member properties and methods
    in a single statement as object literal.Below we create a rectangle
    with two numeric properties, one object property, and a method. 
*/

var rec = {
    width: 50,
    hight: 30,
    color: { red: 000, green: 255, blue: 128 }, // object property
    getArea: function() { // method property 
        return this.width * this.hight;
    }
};

// console.log(Object.keys(rec)); // object property keys
// console.log(Object.values(rec)); // object property values
// console.log(Object.values(rec.color));
// console.log(Object.entries(rec));  // Object to 2D array

// console.log(rect);
// console.log(rect.color);
// console.log(rect.color.green);
// console.log(rect.getArea());


/* To get a list of property names from an object use the for-in loop. */


var car = { make: "Toyota", model: "Camry" };
for (var i in car) {
    //console.log(i + ": " + car[i]);
}

/* Use the delete operator to remove a property from an object */
var rev = {
    name: "hasan",
    age: 34
};

// console.log(delete rev.age);
// console.log(delete rev.name);
// console.log(rev.name);



/* Comparing two objects: */

var obj1 = { roll: 24, age: 21 };
var obj2 = { roll: 24, age: 21 };

//console.log(obj1);

//First way
if (obj1.roll == obj2.roll && obj1.age == obj2.age) {
    console.log(true);
} else {
    console.log(false);
}

//Second way
//console.log(JSON.stringify(obj1)); // stringify property
//console.log(JSON.stringify(obj1) == JSON.stringify(obj2));


/* Object to Object Create or Copy */

var rec1 = Object.assign({}, rec);
//console.log(rec1);