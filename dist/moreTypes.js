"use strict";
let repsonse = "42";
let numericLength = repsonse.length;
let bookString = '{"name":"harryPorter"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject);
const inputElement = document.getElementById("username");
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log('Error', error);
    }
}
