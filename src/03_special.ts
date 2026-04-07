//Unions

let title: string | undefined = "TypeScript";

//void: function doesn't return a useful value
function log(msg: string): void {
    console.log(msg);
}

function fail(msg: string): never {
    throw new Error(msg)
}
