function password(input) {
    let name = input.shift();
    let pass = input.shift();
    let data = input.shift();

    let i = 0;
    while (data !== pass) {
        data = input[i];
        i++;
    }
    console.log(`Welcome ${name}!`);
}

password(
    [
        "Nakov",
        "1234",
        "Pass",
        "1324",
        "1234"
    ]
)