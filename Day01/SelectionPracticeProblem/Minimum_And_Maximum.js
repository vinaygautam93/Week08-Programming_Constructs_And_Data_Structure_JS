let num=5;
let maximum=-1;
let minimum=10000;
for(let i=0;i<num;i++){
   maximum=Math.max(maximum,Math.floor(Math.random() * 900)+100);
   minimum=Math.min(minimum,Math.floor(Math.random() * 900)+100);
}
console.log("Maximum number is "+maximum);
console.log("Minimum number is "+minimum);