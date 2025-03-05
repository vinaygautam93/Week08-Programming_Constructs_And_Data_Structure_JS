// 1. Generates 10 Random 3-Digit numbers, Store them in an array, 
// and then find the 2nd largest and the 2nd smallest number

function generateRandomNumbers() {
    let numbers = [];
    
    // Generate 10 random 3-digit numbers
    for (let i = 0; i < 10; i++) {
      numbers.push(Math.floor(Math.random() * 900) + 100);
    }
  
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    // Find 2nd largest and 2nd smallest without sorting
    for (let num of numbers) {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num < largest) {
        secondLargest = num;
      }
  
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num > smallest) {
        secondSmallest = num;
      }
    }
  
    console.log("Generated Numbers: " + numbers);
    console.log("2nd Largest: " + secondLargest);
    console.log("2nd Smallest: " + secondSmallest);
  }
  
  generateRandomNumbers();
  