const args = process.argv.slice(2); 
const left = parseInt(args[0], 10);

for (let i = 1; i <= left; i++) {
    if (left % i == 0) {
        console.log(i);
    }
}   