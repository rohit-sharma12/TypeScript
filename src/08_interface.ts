//Interface = A way to define the shape/structure of an object. 👍

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