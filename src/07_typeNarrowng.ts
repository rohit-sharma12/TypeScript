//Type Narrowing Using typeof 👍

let data: number | string = 'rohit';

if (typeof data === 'string') {
    data.toUpperCase();      // ✅ Now TS knows it's a string
} else {
    //data.toFixed();          // ✅ Now TS knows it's a number
}

//Narrowing with typeof 👍
function print(value: number | boolean) {
    if (typeof value === "number") {
        console.log(value.toFixed(2));
    } else {
        console.log(value ? "True" : "False");
    }
}

//Type Narrowing Using Truthiness Checks 👍
function logName(name?: string) {
    if (name) {
        console.log("Name:", name.toUpperCase());
    } else {
        console.log("No name");
    }
}

//Type Narrowing Using Equality Checks 👍
function checkId(id: number | null) {
    if (id === null) {
        console.log('ID notfound');
    } else {
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

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();  // Dog only
    } else {
        animal.meow();  // Cat only
    }
}