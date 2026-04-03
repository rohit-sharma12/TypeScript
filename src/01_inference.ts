//TypeScript knows the JS and
// will generate types for you in many cases.

let helloWorld = "Hello World";

//TypeScript knows that helloWorld is a string.

export function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 6));

//you should also annotate when the type is not obvious

let maybe: string | number;
maybe = Math.max() > 5 ? "test" : 10;