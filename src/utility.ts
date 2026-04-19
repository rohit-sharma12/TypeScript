//🔧 Utility Types in TypeScript

//Utility Types = built -in generic types that help you transform or manipulate existing types.

//🧠 Why Utility Types?
//Reduce code duplication
//Make types reusable
//Handle real - world cases(APIs, forms, updates)
//Very common in React, Node, Redux

//1) -->> Partial <T>
//👉 Makes all properties optional
type UserData = {
    name: string;
    age: number;
};

const u: Partial<UserData> = {
    name: "Rohit" // age is optional
};

//2)-->>Required <T>
//👉 Makes all properties required
type UserData2 = {
    name?: string;
    age?: number;
};

const u1: Required<UserData2> = {
    name: "Rohit",
    age: 20
};

//3).-->> Readonly<T>
//👉 Makes properties read - only
type UserData3 = {
    course: string;
};
const u3: Readonly<UserData3> = {
    course: "BCA"
};

//✅ 4. Pick<T, K>
//👉 Select specific properties
type UserData4 = {
    name: string;
    age: number;
    email: string;
};

type UserName = Pick<UserData4, "name" | "email">;

//✅ 5. Omit<T, K>
//👉 Remove specific properties
type player = {
    name: string;
    age: number;
    email: string;
};

type playerWithoutEmail = Omit<player, "email">;

//✅ 9. Exclude<T, U>
//👉 Remove types from union

type T = string | number | boolean;

type OnlyString = Exclude<T, number | boolean>;

//✅ 10. Extract<T, U>
//👉 Extract specific types

type T2 = string | number | boolean;

type OnlyNumber = Extract<T2, number>;

//✅ 11. Record<K, T>
//👉 Create object type with specific keys

type Roles = "admin" | "user";

const info: Record<Roles, string> = {
    admin: "Rohit",
    user: "Aman"
};