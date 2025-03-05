// Get day and month from command line arguments
// Command line arguments

const args = process.argv.slice(2); 
 // Month (1-12)
const month = parseInt(args[0], 10);
 // Day (1-31)
const day = parseInt(args[1], 10);  

function isBetweenMarch20AndJune20(month, day) {
    // Define the range of dates
    const startMonth = 3; // March
    const startDay = 20;  // March 20th
    const endMonth = 6;   // June
    const endDay = 20;    // June 20th

    // Check if the given date is between March 20 and June 20
    if ((month > startMonth || (month === startMonth && day >= startDay)) &&
        (month < endMonth || (month === endMonth && day <= endDay))) {
        return true;
    }
    return false;
}

// Run the check and print the result
const result = isBetweenMarch20AndJune20(month, day);
console.log(result);
