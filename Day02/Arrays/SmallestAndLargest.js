// 2. Sort the array and find 2nd largest and 2nd smallest element

function generateAndSortNumbers() {
    let numbers = [];
    
    // Generate 10 random 3-digit numbers
    for (let i = 0; i < 10; i++) {
      numbers.push(Math.floor(Math.random() * 900) + 100);
    }
  
    // Sort the array in ascending order
    numbers.sort((a, b) => a - b);
  
    console.log("Generated Numbers: " + numbers);
    console.log("2nd Largest: " + numbers[numbers.length - 2]);
    console.log("2nd Smallest: " + numbers[1]);
  }
  
  generateAndSortNumbers();
  