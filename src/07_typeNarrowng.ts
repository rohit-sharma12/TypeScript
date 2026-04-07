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

//created a custom type: 👍
type ChaiOrder = {
    type: string
    sugar: Number
}
//This function checks whether obj matches the structure of ChaiOrder.
function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai ${item}`
}

type MasalaChai = { type: 'masala', spicelevel: number };
type GingerChai = { type: 'ginger', amount: number };
type ElaichiChai = { type: 'elaichi', aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return `Masala chai`
            break;
        case "ginger":
            return `Ginger chai`
            break;
        case "elaichi":
            return `Elaichi chai`
            break;
    }
}