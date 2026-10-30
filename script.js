const num1 = Number(prompt("Enter the first number"));
const num2 = Number(prompt("Enter the second number"));
const division = (a, b) => a / b;
console.log(division(num1,num2))
new Promise((res,rej)=>{
    if(num2 === 0){
        rej("Division by zero is not allowed")
    }
    res("Happy happy happy")
}).catch((err)=>{
    console.log("Error",err)
})