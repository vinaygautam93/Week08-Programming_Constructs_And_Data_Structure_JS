let num=10;
let sum=0;
for(let i=0;i<num;i++){
    sum+=Math.floor(Math.random() * 91)+10;
    console.log(Math.floor(Math.random() * 91)+10);
}
console.log("Average of "+num+" number is "+sum/num);