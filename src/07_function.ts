function fruits(): number {
    return 18
}

function simple(): boolean {
    return true
}

function complex(): number | string {
    let data = 10;
    let name = 'rohit';
    let type = "age";

    if (type == 'age') {
        return data;
    } else {
        return name
    }
}

