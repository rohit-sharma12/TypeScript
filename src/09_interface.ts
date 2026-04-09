//Interface = A way to define the shape/structure of an object. 👍
//TypeScript interfaces define the structure of objects by specifying property types and method signatures,
// ensuring consistent shapes and enhancing code clarity.

//Properties of Interfaces 👍
//1. Extending Properties
//2. Read-Only Properties
//3. Optional Properties (?)sysmbol

type ChaiOrder1 = {
    type: string;
    suagr: number;
    strong: boolean
}

function makeChai(order: ChaiOrder1) {
    console.log(order);
}

type TeaRecipe = {
    water: number;
    milk: number
}

class MasalaChai1 implements TeaRecipe {
    water = 100;
    milk = 50;
}

interface CupSize {
    size: "small" | "medium";
}

class Chai1 implements CupSize {
    size: "small" | "medium" = "small";
}

