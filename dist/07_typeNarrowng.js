"use strict";
//Type Narrowing Using typeof 👍
let data = 'rohit';
if (typeof data === 'string') {
    data.toUpperCase(); // ✅ Now TS knows it's a string
}
else {
    //data.toFixed();          // ✅ Now TS knows it's a number
}
//Narrowing with typeof 👍
function print(value) {
    if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
    else {
        console.log(value ? "True" : "False");
    }
}
//Type Narrowing Using Truthiness Checks 👍
function logName(name) {
    if (name) {
        console.log("Name:", name.toUpperCase());
    }
    else {
        console.log("No name");
    }
}
//Type Narrowing Using Equality Checks 👍
function checkId(id) {
    if (id === null) {
        console.log('ID notfound');
    }
    else {
        console.log("ID:", id.toFixed());
    }
}
//Type Narrowing Using instanceof 👍
class Dog {
    bark() { }
}
class Cat {
    meow() { }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark(); // Dog only
    }
    else {
        animal.meow(); // Cat only
    }
}
//This function checks whether obj matches the structure of ChaiOrder.
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`;
    }
    return `Serving custom chai ${item}`;
}
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return `Masala chai`;
            break;
        case "ginger":
            return `Ginger chai`;
            break;
        case "elaichi":
            return `Elaichi chai`;
            break;
    }
}
