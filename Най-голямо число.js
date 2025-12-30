function biggestNumber(input) {
    let bigNumber = Number(input.shift());

    let i = 0;
    while (input[i] !== "Stop") {
        let currentNumber = Number(input[i]);

        if (currentNumber > bigNumber) {
            bigNumber = currentNumber;
        }

        i++;
    }

    console.log(bigNumber);
}

// biggestNumber(
//     [
//         "45",
//         "-20",
//         "7",
//         "99",
//         "Stop"
//     ]
// )

biggestNumber(
    [
        "-1",
        "-2",
        "Stop"
    ]
)