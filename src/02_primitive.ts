let usernmae: string = "Rohit";
let age: number = 22;
let isLoggedIn: boolean = true;

const big: bigint = 389294994924n;

const TOKEN: unique symbol = Symbol('TOKNE');

function yearToDay(years: number): number {
    return years * 360;
}

//Any 👍
//--> When migrate JS code to TS.
//--> When dealing with dynamic values from APIs.
//--> When working with 3rd party libraries that lack type definations.
//--> DO NOT ANY -->> Try to ignore as much as posible

let value: any = 'Rohit';
value = 10
value = ['anil']

//Unknown 👍
//->similar to any, but safer because it force type checking before performing operations on the value.

let value1: unknown = "Computer Science";

value1 = ['rohit'];
if (typeof  value1 === "string") {
    console.log(value1.toUpperCase());
}
