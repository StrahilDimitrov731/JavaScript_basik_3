function examPreparation(input) {
    let numberOfUnsatisfactoryGrades = Number(input.shift());
    let goodGradesCounter = 0;
    let badGradesCouter = 0;
    let sumGrades = 0;
    let allGrades = 0;
    let averageGrade = 0;
    let lastTheme = "";

    let i = 0;
    while (input[i] !== "Enough") {
        let currentTask = input[i];
        let currentGrade = Number(input[i + 1]);

        if (currentGrade <= 4) {
            badGradesCouter++;

            if (badGradesCouter >= numberOfUnsatisfactoryGrades) {
                console.log(`You need a break, ${badGradesCouter} poor grades.`);
                break;
            }
            else {
                sumGrades += currentGrade;
                lastTheme = currentTask;
            }
        }
        else {
            goodGradesCounter++;
            sumGrades += currentGrade;
            lastTheme = currentTask;
        }

        allGrades = goodGradesCounter + badGradesCouter;
        i += 2;
    }

    if (input[input.length - 1] == "Enough") {
        averageGrade = sumGrades / allGrades;
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${allGrades}`);
        console.log(`Last problem: ${lastTheme}`);
    }
}

examPreparation(
    [
        "3",
        "Money",
        "6",
        "Story",
        "4",
        "Spring Time",
        "5",
        "Bus",
        "6",
        "Enough"
    ]
)

// examPreparation(
//     [
//         "2",
//         "Income",
//         "3",
//         "Game Info",
//         "6",
//         "Best Player",
//         "4"
//     ]
// )