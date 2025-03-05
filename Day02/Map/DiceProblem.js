// Function to roll a die and track the results in a map until any number reaches 10 rolls
function rollDie() {
    // Create a map to store the count of each die face (1-6)
    let dieRolls = new Map();
  
    // Initialize the map with counts set to 0 for each face (1 to 6)
    for (let i = 1; i <= 6; i++) {
      dieRolls.set(i, 0);
    }
  
    let totalRolls = 0;  // To track the total number of rolls
  
    // Keep rolling the die until one number reaches 10 occurrences
    while (true) {
      // Generate a random die roll between 1 and 6
      let roll = Math.floor(Math.random() * 6) + 1;
  
      // Increase the count for the rolled number in the map
      dieRolls.set(roll, dieRolls.get(roll) + 1);
      totalRolls++;
  
      // Check if any number has been rolled 10 times
      if ([...dieRolls.values()].includes(10)) {
        break;  
      }
    }
  
    // Find the number with the maximum and minimum occurrences
    let maxRolls = Math.max(...dieRolls.values());
    let minRolls = Math.min(...dieRolls.values());
  
    // Find the corresponding numbers for max and min occurrences
    let maxNumber = [...dieRolls].find(([number, count]) => count === maxRolls)[0];
    let minNumber = [...dieRolls].find(([number, count]) => count === minRolls)[0];
  
    // Print the results
    console.log(`Total Rolls: ${totalRolls}`);
    console.log("Roll counts: ", [...dieRolls]);
    console.log(`Most frequent number: ${maxNumber} (rolled ${maxRolls} times)`);
    console.log(`Least frequent number: ${minNumber} (rolled ${minRolls} times)`);
  }
  
  // Call the function to execute the die roll simulation
  rollDie();
  