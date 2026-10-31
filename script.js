const num1 = Number(prompt("Enter the first number"));
const num2 = Number(prompt("Enter the second number"));
const division = new Promise((res,rej)=>{
    if(num2 === 0){
        rej("Division by zero is not allowed")
    }
    res(num1/num2)
})
division
       .then((data)=>{console.log(`Result: ${data}`)})
       .catch((err)=>{console.log(`Error : ${err}`)})
