let repsonse: any = "42";

let numericLength: number = (repsonse as string).length;


type Book = {
    type: string
}

let bookString = '{"name":"harryPorter"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject);


const inputElement = document.getElementById("username") as HTMLInputElement;

 
try {

} catch (error) {
    if (error instanceof Error) {
        console.log('Error', error);
    }
}

