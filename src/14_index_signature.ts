//ndex Signature = a way to define object types when you don’t know all the property names in advance.

type User1 = {
    [key: string]: string | number;
};

const userData: User1 = {
    name: "Rohit",
    city: "Delhi",
    country: "India",
    age: 21
};

//3. Mixed with Fixed Properties 💯
type Product2 = {
    name: string;
    price: number;
    [key: string]: string | number;
};

const p: Product2 = {
    name: "Laptop",
    price: 50000,
    brand: "HP",
    color: "Black"
};

// 👉 All properties must match index signature type

//4. Readonly Index Signature💯
type ReadOnlyUser = {
    readonly [key: string]: string;
};

const user: ReadOnlyUser = {
    name: "Rohit"
};

// user.name = "New"; ❌ Error