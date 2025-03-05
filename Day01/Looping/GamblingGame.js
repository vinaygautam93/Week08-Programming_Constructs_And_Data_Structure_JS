// Function to simulate a single bet (win or lose)
function placeBet() {
    return Math.random() < 0.5; 

// Function to simulate the gambling process
function gamblingGame() {
    let money = 100; // Gambler starts with Rs 100
    let wins = 0; // Counter for wins
    let bets = 0; // Counter for number of bets

    while (money > 0 && money < 200) {
        bets++; // Increment the number of bets
        if (placeBet()) { // 50% chance of winning
            wins++; // Increment wins if the bet is a win
            money += 1; // Gambler wins Re 1
        } else {
            money -= 1; // Gambler loses Re 1
        }
    }

    // Output the results
    if (money === 200) {
        console.log(`Gambler reached Rs 200!`);
    } else {
        console.log(`Gambler went broke with Rs 0.`);
    }
    
    console.log(`Total bets placed: ${bets}`);
    console.log(`Total wins: ${wins}`);
}
}

// Start the gambling game
gamblingGame();
