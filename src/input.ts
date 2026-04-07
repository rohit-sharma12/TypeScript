function getInfo() {
    const nameInuput = document.getElementById("username") as HTMLInputElement

    const name: string = nameInuput.value
    const emailInuput = document.getElementById("email") as HTMLInputElement
    const email: string = emailInuput.value
    const ageInuput = document.getElementById("age") as HTMLInputElement
    const age: string = ageInuput.value

    console.log(name, email, age);
}