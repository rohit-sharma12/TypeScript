//📦 Namespaces in TypeScript

//Namespace = a way to organize and group related code under one name(like a container).

// Mainly used to avoid naming conflicts and structure large codebases.

namespace UserModule {
    export const name = "Rohit";

    export function greet() {
        console.log("Hello " + name);
    }
}

UserModule.greet(); // Hello Rohit

//🧠 Key Points
//Everything inside namespace is scoped
//Use export to make things accessible outside

//Access using:
UserModule.name

//✅ 2. Without Namespace (Problem)
const name1 = "Rohit"; // ❌ conflict possible

//If many files define name, it creates collision