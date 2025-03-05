// Function to identify place value
function findPlaceValue(number) {
    // Determine place value based on the input number
    switch (number) {
        case 1:
            console.log("Unit");
            break;
        case 10:
            console.log("Ten");
            break;
        case 100:
            console.log("Hundred");
            break;
        case 1000:
            console.log("Thousand");
            break;
        case 10000:
            console.log("Ten Thousand");
            break;
        case 100000:
            console.log("Lakh");
            break;
        case 1000000:
            console.log("Ten Lakh");
            break;
        case 10000000:
            console.log("Crore");
            break;
        default:
            console.log("Invalid input or unsupported place value.");
    }
}

// Example usage:
const args = process.argv.slice(2);  // Read command-line arguments

 // Parse the number
const number = parseInt(args[0], 10); 
findPlaceValue(number);
