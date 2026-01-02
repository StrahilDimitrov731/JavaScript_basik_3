function oldLibrary(input) {
    let needBook = input.shift();
    let isFound = false;
    let bookCounter = 0;
    let i = 0;

    while (input[i] !== "No More Books") {
        let currentBook = input[i];

        if (currentBook == needBook) {
            isFound = true;
            break;
        }

        bookCounter++;
        i++;
    }

    if (isFound == true) {
        console.log(`You checked ${bookCounter} books and found it.`);
    }
    else {
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCounter} books.`);
    }
}

oldLibrary(
    [
        "The Spot",
        "Hunger Games",
        "Harry Potter",
        "Torronto",
        "Spotify",
        "No More Books"
    ]
)