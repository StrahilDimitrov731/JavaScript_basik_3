function completion(input) {
    let name = input.shift();
    let classNumber = 0;
    let averageScore = 0;
    let sumOfScore = 0;
    let slowScore = 0;

    let i = 0;
    while (i < input.length) {
        let currentScore = Number(input[i]);
        classNumber++;

        if (currentScore < 4) {
            slowScore++;

            if (slowScore >= 1) {
                console.log(`${name} has been excluded at ${classNumber} grade`);
                break;
            }
        }

        sumOfScore += currentScore;
        i++;
    }

    if (classNumber == 12) {
        averageScore = sumOfScore / classNumber;
        console.log(`${name} graduated. Average grade: ${averageScore.toFixed(2)}`);
    }
}

completion(
    [
        "Gosho",
        "5",
        "5.5",
        "6",
        "5.43",
        "5.5",
        "6",
        "5.55",
        "5",
        "6",
        "6",
        "5.43",
        "5"
    ]
)