function sumOfChild(input){
    let needSum = Number(input.shift());
    let sum = 0;

    let i = 0;
    while(sum < needSum){
        sum += Number(input[i]);
        i++;
    }

    console.log(sum);
}

// sumOfChild(
//     [
//         "100",
//         "10",
//         "20",
//         "30",
//         "40"
//     ]
// )

sumOfChild(
    [
        "20",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6"
    ]
)