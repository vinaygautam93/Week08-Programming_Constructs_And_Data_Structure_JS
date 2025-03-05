// Function to simulate the coin flip
function flipCoin() {

    // Randomly returns "Heads" or "Tails"
    return Math.random() > 0.5 ? "Heads" : "Tails";  
}

// Function to simulate the coin flip game until one side wins 11 times
function coinFlipGame() {

    //head count and tails count
    let headsCount = 0;  
    let tailsCount = 0; 

    while (headsCount < 11 && tailsCount < 11) {
        const flipResult = flipCoin();  
        console.log(flipResult);  // Print the flip result

        // Increment the respective counter based on the flip result
        if (flipResult === "Heads") {
            headsCount++;
        } else {
            tailsCount++;
        }

        // Print the current status of the game
        console.log(`Heads: ${headsCount}, Tails: ${tailsCount}`);
    }

    // Determine the winner
    if (headsCount === 11) {
        console.log("Heads wins 11 times!");
    } else {
        console.log("Tails wins 11 times!");
    }
}

// Call the function to start the game
coinFlipGame();
