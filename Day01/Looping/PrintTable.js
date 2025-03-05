const args = process.argv.slice(2); 
const num = parseInt(args[0], 10);

for (let i = 1; i <= 10; i++) { 
    console.log(`${num} * ${i} = ${num * i}`);
}