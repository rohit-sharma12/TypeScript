//Unions
// allows a variable, function parameter,
//  or property to hold values of multiple distinct types
let title: string | undefined = "TypeScript";

function fruitsData(): string | string[] {
    let item = 1;
    if (item > 1) {
        return ['apple', 'grapes']
    } else {
        return 'apple'
    }
}

//Intersection 👍
//In TypeScript, intersection types combine multiple types into a single type.

// type personTA = { name: string }
// type personTB = { age: number }
// type personTC = personTA & personTB;  //ntersection

//uisng interface 💯
interface personTA { name: string }
interface personTB { age: number }
type personTC = personTA & personTB;  //ntersection


let personDataA: personTA = { name: 'Mohit' }
let personDataB: personTB = { age: 30 }

let personDataC: personTC = { name: 'Mohit', age: 30 }


//void 👍
//used to represent the absence of a return value from a function
//void: function doesn't return a useful value
function log(msg: string): void {
    console.log(msg);
}

//Never 👍
// representing values that should theoretically never occur. 
function loopFunction(): never {
    while (true) {
        console.log("loop");
    }
}

