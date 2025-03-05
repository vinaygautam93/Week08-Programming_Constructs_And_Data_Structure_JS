const args = process.argv.slice(2); 
const n = parseInt(args[0], 10);

for(let i = 1; i <= n; i++) {
   console.log(2**i);
}