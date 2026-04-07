const dish = {
    name: "Paneer",
    price: 90,
    isGood: true
}

let dishName: {
    name: string;
    price: number;
    isValuable: boolean
}

dishName = {
    name: "Pasta",
    price: 89,
    isValuable: true
}

type dishName2 = {
    name: string;
    price: number;
    ingrediants: string[]
}

const Pizza: dishName2 = {
    name: "Pizza",
    price: 299,
    ingrediants: ["cheese", "olives", "onions"]
}