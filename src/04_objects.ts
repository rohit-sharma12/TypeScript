//In TypeScript, an object is a collection of key–value pairs.

type User = {
    id: number,  //required
    name: string,
    email?: string, //optional (could be absent)
    readonly createdAt: Date  //cannot be reassigned
}

const user1: User = {
    id: 1,
    name: 'Rohit',
    email: 'rohit@gmail.com',
    createdAt: new Date()
}
const user2: User = {
    id: 2,
    name: 'Isha',
    email: 'isha@gmail.com',
    createdAt: new Date()
}

//Error: cannot modify readonly property
//user1.createdAt = new Date()
