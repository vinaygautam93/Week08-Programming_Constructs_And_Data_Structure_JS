const args = process.argv.slice(2); 
const year = parseInt(args[0], 10); 
if(year%4==0 || year%400==0 && year%100!=0){
    console.log("Year is leap year");
}else{
    console.log("Year is not leap year");
}