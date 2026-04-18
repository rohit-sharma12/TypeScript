# TypeScript Learning Journey 🚀

This repository contains all my TypeScript learning notes, examples, concepts, and practice code.  
I created this repo to track my progress, revise concepts easily, and build a strong TypeScript foundation for frontend/backend development.

---

## 📚 Why I'm Learning TypeScript
- To write safer and cleaner JavaScript
- To improve code quality with static typing
- To prepare for frontend / full-stack interviews
- To use TS in React, Node.js, and large-scale applications

# 📘 Day 01 — TypeScript Learning

Today I learned some important foundational concepts in TypeScript that help in setting up a project and writing safer code.

---

## 🔹 1. Understanding `tsconfig.json`

I learned why `tsconfig.json` is important and how it controls how TypeScript works.

Key properties I explored:

- **"target"** → Output JavaScript version  
- **"module"** → Module system (commonjs, ESNext etc.)  
- **"rootDir"** → Where my `.ts` files are  
- **"outDir"** → Where compiled `.js` files go  
- **"strict"** → Enables strict type checking  
- **"noImplicitAny"** → Helps avoid accidental `any`

`tsconfig.json` helps TypeScript understand **how to compile, where to compile, and how strict to be**.

---

## 🔹 2. Primitive Data Types

I revised the core primitive types in TypeScript:

- `string`
- `number`
- `boolean`
- `bigint`
- `symbol`
- `null`
- `undefined`

```ts
Example:

let userName: string = "Rohit";
let age: number = 21;
```
## 3. Special Types

I also learned the purpose of TypeScript’s special types:

any → Avoid using, removes type safety
unknown → Safer alternative to any
void → Functions that don’t return anything
never → Functions that never return (errors, infinite loops)

```ts
Example:

function error(msg: string): never {
  throw new Error(msg);
}
```

## 4. Basic Object Types

I practiced creating and typing objects:
```ts
let person: {
  name: string;
  age: number;
  isAdmin: boolean;
} = {
  name: "Rohit",
  age: 21,
  isAdmin: false
};
```
⭐ Key Takeaways
tsconfig.json controls TypeScript behavior and project setup
Primitive types help write predictable and cleaner code
Special types (void, never, unknown) add stronger safety
Object typing helps maintain stable data structures
Overall, TypeScript already feels more structured than plain JS

## 5. Type Narrowing

TypeScript intelligently narrows down the type of a variable based on conditions and checks.

🔍 Example:
```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```
Techniques Learned:
typeof narrowing
instanceof narrowing
Equality checks
Truthiness checks
Custom type predicates

## 📚 1. Arrays

An array is an ordered list of values.
Values may be numbers, strings, objects, or even other arrays.

### ✅ Array Declaration
```ts
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Rohit", "Aman", "Sita"];
let mixed: (string | number)[] = [1, "hello", 3];
```

✅ What is a Tuple?

A fixed-length array where each element has a specific type.

Syntax
```ts
let tuple: [string, number];
Example
let person: [string, number] = ["Rohit", 21];
```
Why Tuples?
Perfect for small structured data
Ensures strict ordering
Example: response from API: [status, message]

🔹 1. Union Types (|)

A union type allows a variable to store one of several types.

✔ Syntax:
```ts
let value: string | number;
✔ Example:
let result: number | boolean;
result = 10;
result = true;
```
📌 Use Case:

Useful when a variable or function argument can take multiple types (e.g., API response).

🔹 2. Intersection Types (&)

Intersection types combine multiple types into one.
The resulting type must satisfy all combined types.

✔ Example:
```ts
type A = { name: string };
type B = { age: number };

type Person = A & B;

const p: Person = {
  name: "Rohit",
  age: 22,
};
```
📌 Use Case:

Useful for merging models or extending existing structure.

🔹 3. void Type

The void type is used when a function does not return anything.

✔ Example:
```ts
function showMessage(): void {
  console.log("Hello TypeScript");
}
```
📌 Use Case:
Event handlers
Logging functions
Utility functions

🔹 4. Function Types

Function types allow us to define clean, strongly typed function signatures.

✔ Syntax:
```ts
type Add = (a: number, b: number) => number;
✔ Example:
const sum: Add = (x, y) => x + y;
```
📌 Use Case:

Useful for:

Callbacks
Reusable function contracts
API services

🔹 5. Interfaces

Interfaces define the shape of an object.
They are scalable and support extension.

✔ Basic Interface:
```ts
interface User {
  name: string;
  age: number;
}
✔ Extending an Interface:
interface Admin extends User {
  role: string;
}
```
📌 Why Use Interfaces?
Great for large applications
Can be extended
Improve code structure

🔹 6. Enums

Enums define a group of named constants.

✔ Example:
```ts
enum Status {
  SUCCESS = "success",
  ERROR = "error",
  PENDING = "pending",
}

let current: Status = Status.SUCCESS;
```
📌 Use Case:

Useful for:

User roles
API response statuses
Modes / options


Today I explored Type Guards and the static keyword, two concepts that help write safer and better-structured TypeScript code.

🔹 1. Type Guards

Type Guards allow TypeScript to narrow down types within a conditional block.
This ensures we perform operations only on the correct type.

✅ Example (typeof narrowing)

function checkValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // string methods
  } else {
    console.log(value.toFixed(2)); // number methods
  }
}

🔹 Other Type Guard Techniques

typeof → for primitives (string, number, etc.)
instanceof → for class-based objects
Equality checks (===)
Truthiness checks
Custom type predicates\

✅ Example (instanceof)
```ts
class User {}
class Admin {}

function checkRole(data: User | Admin) {
  if (data instanceof Admin) {
    console.log("Admin user");
  } else {
    console.log("Normal user");
  }
}
```
🔹 2. static Keyword in TypeScript

The static keyword is used to define properties or methods that belong to the class itself, not instances.

✅ Example
```ts
class MathUtils {
  static add(a: number, b: number): number {
    return a + b;
  }
}
```

// No need to create object
```ts
console.log(MathUtils.add(2, 3)); // 5
```

🔹 When to Use static?
Utility/helper functions
Shared logic across all instances
Constants or configuration values

🚀 Generics, keyof & Utility Types

Today I explored some of the most powerful features in TypeScript that make code scalable, reusable, and type-safe.

🔹 1. Generics — Write reusable code

Generics allow us to create flexible functions without losing type safety.
```ts
function identity<T>(value: T): T {
  return value;
}
```
📌 One function → works with any type

🔹 2. keyof — Safe object key access

keyof ensures we only use valid object keys.
```ts
type User = {
  name: string;
  age: number;
};

function getValue(obj: User, key: keyof User) {
  return obj[key];
}
```
📌 Prevents invalid key access errors

🔹 3. Utility Types — Built-in power tools

TypeScript provides utility types to transform existing types easily.

✅ Partial

Makes all properties optional

✅ Required

Makes all properties required

✅ Readonly

Prevents modification

✅ Pick

Select specific properties

⭐ Key Takeaways

✔ Generics make code reusable and flexible
✔ keyof ensures safe property access
✔ Utility types simplify complex type transformations
✔ TypeScript is becoming more powerful as I go deeper

