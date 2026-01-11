function steps(input) {
    let sumStep = 0;
    let needStep = 0;
    let moreStep = 0;

    let i = 0;
    while (i < input.length) {
        let currentStep = input[i];
        let stepHome = input[input.length - 1];

        if (currentStep == "Going home") {
            sumStep += Number(stepHome);
            break;
        }
        if (currentStep !== "Going home") {
            sumStep += Number(currentStep);
        }

        i++;
    }

    if (sumStep >= 10000) {
        moreStep = sumStep - 10000;
        console.log("Goal reached! Good job!");
        console.log(`${moreStep} steps over the goal!`);
    }
    if (sumStep < 10000) {
        needStep = 10000 - sumStep;
        console.log(`${needStep} more steps to reach goal.`);
    }
}

// steps(
//     [
//         "1500",
//         "3000",
//         "250",
//         "1548",
//         "2000",
//         "Going home",
//         "2000"
//     ]
// )

// steps(
//     [
//         "1500",
//         "300",
//         "2500",
//         "3000",
//         "Going home",
//         "200"
//     ]
// )

// steps(
//     [
//         "125",
//         "250",
//         "4000",
//         "30",
//         "2678",
//         "4682"
//     ]
// )

// steps(
//     [
//         "1000",
//         "1500",
//         "2000",
//         "6500"
//     ]
// )