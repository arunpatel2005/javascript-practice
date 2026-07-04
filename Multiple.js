let n=prompt("Enter a number: ");
n=Number(n);
let result;

if(n%5==0){
    result=n+" is a multiple of 5";
}
else{
    result=n+" is not a multiple of 5";
}
console.log(result);