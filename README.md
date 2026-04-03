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

⭐ Key Takeaways
tsconfig.json controls TypeScript behavior and project setup
Primitive types help write predictable and cleaner code
Special types (void, never, unknown) add stronger safety
Object typing helps maintain stable data structures
Overall, TypeScript already feels more structured than plain JS
