const args = process.argv.slice(2); 
 // First number
const num1 = parseInt(args[0], 10);
//Second number
const num2 = parseInt(args[1], 10);  
//Third number
const num3 = parseInt(args[1], 10);  

// First operation: num1 + (num2 * num3)
console.log(num1 + num2 * num3);

// Second operation: num3 + (num1 / num2)
console.log(num3 + num1 / num2);

// Third operation: (num1 % num2) + num3
console.log(num1 % num2 + num3);

// Fourth operation: (num1 * num2) + num3
console.log(num1 * num2 + num3);
