const args = process.argv.slice(2); 
const left = parseInt(args[0], 10);
const right = parseInt(args[1], 10);

function checkPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
           return false;
        }
    }
    return true;
}
for(let i = left; i <= right; i++) {
    if(checkPrime(i)) {
        console.log(i);
    }
}