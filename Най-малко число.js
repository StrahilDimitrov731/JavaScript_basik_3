function smallestNumber(input) {
    let smallNum = Number(input.shift());

    let i = 0;
    while (input[i] !== "Stop") {
        let currentNumber = Number(input[i]);

        if (currentNumber < smallNum) {
            smallNum = currentNumber;
        }

        i++;
    }

    console.log(smallNum);
}

smallestNumber(
    [
        "100",
        "99",
        "80",
        "70",
        "Stop"
    ]
)