//Type guard = a way to perform type narrowing.
//Examples of type guards:

//typeof  -->> for primitive data types
//instanceof  -->> used for objects / classes

function printValue(value: string | number) {
    if (typeof value === "string") {
        // TypeScript knows: value is string
        console.log(value.toUpperCase());
    } else {
        // TypeScript knows: value is number
        console.log(value.toFixed(2));
    }
}
printValue("rohit");
printValue(10);


//instance of 👍

class Product1 { }

class Order21 { }

let p1 = new Product1();
let o1 = new Order21();

function checkDetails(data: Order21 | Product1) {
    if (data instanceof Order21) {
        console.log("this is order");
    } else {
        console.log("this is product");
    }
}

// ✅ Calling function
checkDetails(p1); 
checkDetails(o1); 