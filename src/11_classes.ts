//TypeScript classes serve as blueprints for creating objects,
// offering a structured approach to object-oriented programming by encapsulating data and behavior.

class Product {
    name: string;
    price: number;
    pId: number;
    isOrdered = false;
    isCart = false;
    constructor(name: string, price: number, pId: number) {
        this.name = name;
        this.price = price;
        this.pId = pId
    }
    addToCart(): void {
        this.isCart = true
    }
    buyProduct() {
        if (this.isCart) {
            return `product ${this.name} is ordered in ${this.price}`
        } else {
            return `no product added`
        }
    }
}

let product = new Product('iPhone', 90000, 101);
product.addToCart();

//Access Modifires 👍

//Access Modifiers: Control visibility of members using three keywords:
//public: Accessible from anywhere (default behavior).
//private: Accessible only within the defining class.
//protected: Accessible within the class and its subclasses.

//Inheritance 👍
class Auth {
    login(name: string, password: string) {
        if (name && password) {
            return "Student Login"
        } else {
            return 'not Login'
        }
    }
}

class Student extends Auth {
    return(marks: number) {
        if (marks > 33) {
            return "Pass"
        } else {
            return "fail"
        }
    }
}

let s1 = new Student();

class Teacher extends Auth {
    return(subject: string) {
        return "he teches" + subject
    }
}

let t1 = new Teacher();

//