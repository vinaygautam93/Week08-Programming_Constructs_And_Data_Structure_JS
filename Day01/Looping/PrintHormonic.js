const args = process.argv.slice(2); 
const n = parseInt(args[0], 10);

var st = "";
for (let i = 1; i <= n; i++) { 
    if (i != n) {
        st += "1/" + i + " + ";  // Display terms as "1/i" 
    } else {
        st += "1/" + i;  // For the last term, no "+" after it
    }
}
console.log(st);

