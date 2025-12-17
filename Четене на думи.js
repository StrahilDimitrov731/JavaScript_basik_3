function readWord(input) {
    let i = 0;
    while (input[i] !== "Stop") {
        console.log(input[i]);
        i++;
    }
}

// readWord(
//     [
//         "Nakov",
//         "SoftUni",
//         "Sofia",
//         "Bulgaria",
//         "SomeText",
//         "Stop",
//         "AfterStop",
//         "Europe",
//         "HelloWorld"
//     ]
// )

readWord(
    [
        "Sofia",
        "Berlin",
        "Moscow",
        "Athens",
        "Madrid",
        "London",
        "Paris",
        "Stop",
        "AfterStop"
    ]
)