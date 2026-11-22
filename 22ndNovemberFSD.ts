function add(a: number, b: number){
    let sum = a + b;
    console.log(`Addition : ${sum}`);
}

function evenOrOdd(num: number){
    if(num % 2 === 0){
        console.log(`${num} is an even number.`);
    } else {
        console.log(`${num} is an odd number.`);
    }
}



function simpleInterest(principal: number, rate: number, time: number){{
    let interest = (principal * rate * time) / 100;
    console.log(`Simple Interest: ${interest}`);
}


function greetUser(name: string){
    console.log(`Hello, ${name}!`);
}


const largestNumber = (a: number, b: number) => {
    console.log(`The largest number between ${a} and ${b} is: ${a > b ? a : b}`);
    return 0;
} 


add(7,8);
evenOrOdd(5);
simpleInterest(1000, 5, 2);
greetUser("Student");
largestNumber(80, 20);


function calculator(num1: number, num2: number, operation: string){
    switch(operation){
        case "add":
            add(num1, num2);
            break;
        case "subtract":
            console.log(`Subtraction: ${num1 - num2}`);
            break;
        case "multiply":
            console.log(`Multiplication: ${num1 * num2}`);
            break;
        case "divide":
            if(num2 !== 0){
                console.log(`Division: ${num1 / num2}`);
            } else {
                console.log("Error: Division by zero is not allowed.");
            }
            break;
        default:
            console.log("Invalid operation. Please choose from 'add', 'subtract', 'multiply', or 'divide'.");
    }
}   
