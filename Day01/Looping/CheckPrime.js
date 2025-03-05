const args = process.argv.slice(2); 
const n = parseInt(args[0], 10);
let flag=true;
for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        flag=false;
        console.log("Not Prime");
        break;
    }
}
if(flag){
    console.log("Prime");
}
