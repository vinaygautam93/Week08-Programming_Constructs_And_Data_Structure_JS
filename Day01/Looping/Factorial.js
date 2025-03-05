const args = process.argv.slice(2); 
const n = parseInt(args[0], 10);

let fact = 1;
for (let i = 1; i <= n; i++) {
    fact *= i;
}
console.log(fact);