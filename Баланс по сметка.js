function bankBalans(input) {
    let total = 0;

    let i = 0;
    while (input[i] !== "NoMoreMoney") {
        let currentSum = Number(input[i]);

        if (currentSum < 0) {
            console.log("Invalid operation!");
            break;
        }

        console.log(`Increase: ${currentSum.toFixed(2)}`);
        total += currentSum;
        i++;
    }

    console.log(`Total: ${total.toFixed(2)}`);
}

// bankBalans(
//     [
//         "5.51",
//         "69.42",
//         "100",
//         "NoMoreMoney"
//     ]
// )

bankBalans(
    [
        "120",
        "45.55",
        "-150",
    ]
)