// 5. Find digits that are repeated twice in the range 0-100 and store them in an array

function findRepeatedDigits() {
    let repeatedDigits = [];
  
    // Iterate from 0 to 100 and check for repeated digits
    for (let i = 0; i <= 100; i++) {
      let str = i.toString();
      
      // Check if a number has repeated digits
      if (str[0] === str[1]) {
        repeatedDigits.push(i);
      }
    }
  
    console.log("Digits repeated twice: ", repeatedDigits);
  }
  
  findRepeatedDigits();
  