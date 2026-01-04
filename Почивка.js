function holiday(input) {
    let needHolidayMoney = Number(input.shift());
    let avalibleMoney = Number(input.shift());
    let spendDayCounter = 0;
    let allDays = 0;

    let i = 0;
    while (i < input.length) {
        let workType = input[i];
        let sum = Number(input[i + 1]);

        if (workType == "spend") {
            avalibleMoney -= sum;
            spendDayCounter++;

            if (avalibleMoney <= 0) {
                avalibleMoney = 0;
            }
        }
        else if (workType == "save") {
            avalibleMoney += sum;
        }

        allDays++;

        if (spendDayCounter == 5) {
            console.log("You can't save the money.");
            console.log(`${allDays}`);
            break;
        }
        i += 2;
    }

    if (avalibleMoney >= needHolidayMoney) {
        console.log(`You saved the money for ${allDays} days.`);
    }
}

// holiday(
//     [
//         "2000",
//         "1000",
//         "spend",
//         "1200",
//         "save",
//         "2000"
//     ]
// )

// holiday(
//     [
//         "110",
//         "60",
//         "spend",
//         "10",
//         "spend",
//         "10",
//         "spend",
//         "10",
//         "spend",
//         "10",
//         "spend",
//         "10"
//     ]
// )

holiday(
    [
        "250",
        "150",
        "spend",
        "50",
        "spend",
        "50",
        "save",
        "100",
        "save",
        "100"
    ]
)