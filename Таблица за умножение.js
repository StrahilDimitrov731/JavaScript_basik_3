function multicationTable() {
    let result = 0;

    for (let firstMultiplier = 1; firstMultiplier <= 10; firstMultiplier++) {
        for (let secondMultiplier = 1; secondMultiplier <= 10; secondMultiplier++) {
            result = firstMultiplier * secondMultiplier;
            console.log(`${firstMultiplier} * ${secondMultiplier} = ${result}`);
        }
    }
}

multicationTable()