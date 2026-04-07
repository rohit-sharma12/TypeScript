"use strict";
//Literals in TS mean: fixing a variable to a specific value, not a type
let direction;
direction = "left";
//direction = "hello";  ❌ Error
//Literal Narrowing(Important Concept) 👍
//TypeScript narrows types automatically if you use const, not let.
let a = "hello"; // type: string (wider)
const b = "hello"; // type: "hello" (literal)
//const keeps the literal value as the only allowed value.
