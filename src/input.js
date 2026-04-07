"use strict";
function getInfo() {
    const nameInuput = document.getElementById("username");
    const name = nameInuput.value;
    const emailInuput = document.getElementById("email");
    const email = emailInuput.value;
    const ageInuput = document.getElementById("age");
    const age = ageInuput.value;
    console.log(name, email, age);
}
