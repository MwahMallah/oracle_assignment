function generateOutput(num) {
    let output = "";

    if (num % 2 === 0) {
        output += "Baz";
    }

    if (num % 5 === 0) {
        output += "inga!";
    }

    if (output === "") {
        output = num;
    }

    return output;
}


for (let i = 1; i < 100; i++) {
    console.log(generateOutput(i));
}