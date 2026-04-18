//writing reusable code that works with different types safely.

function fruit<T>(name: T): T {
    return name
}
//👉 Now it works for any type ✅

fruit('apple')
fruit(10)
fruit(true)

//with array 💯
function getFirst<T>(data: T[]): T | undefined {
    return data[0]
}

getFirst([1, 2, 3]);