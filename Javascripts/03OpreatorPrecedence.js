//Clean Code
let count = 0; // declaring a variable named count and initializing it to 0
const imageElement = document.getElementById("image"); // getting the image element by its ID
const paragraph = document.getElementById("text"); // getting the text element by its ID
// adding an event listener to the image element that listens for click events
imageElement.onclick= () => {
    count++; // incrementing the count variable by 1 each time the image is clicked
    paragraph.textContent = `You Clicked it: ${count} times`; // updating the text content of the paragraph element
}



// Operator Precedence
// Operator precedence determines the order in which operators are evaluated in an expression.  
// In JavaScript, operators have different precedence levels, and the ones with higher precedence are evaluated first.
// For example, in the expression 2 + 3 * 4, the multiplication operator (*) has higher precedence than the addition operator (+), so the multiplication is performed first, resulting in 2 + 12 = 14.  
// Here is a list of some common operators in JavaScript, ordered by precedence from highest to lowest:
const operatorPrecedence = [    
    "()", // Parentheses
    "[]", // Array indexing
    ".", // Member access
    "++", "--", // Increment and decrement
    "**", // Exponentiation
    "*", "/", "%", // Multiplication, division, and modulus
    "+", "-", // Addition and subtraction
    "<<", ">>", ">>>", // Bitwise shifts
    "<", "<=", ">", ">=", // Comparison operators
    "==", "!=", "===", "!==", // Equality operators
    "&", // Bitwise AND
    "^", // Bitwise XOR
    "|", // Bitwise OR
    "&&", // Logical AND
    "||", // Logical OR
    "?", // Ternary operator
    "=" // Assignment operator
];      
// Note that parentheses can be used to override the default precedence and force certain operations to be evaluated first.
// For example, in the expression (2 + 3) * 4, the addition is performed first because of the parentheses, resulting in 5 * 4 = 20. 
// Understanding operator precedence is important for writing correct and efficient JavaScript code, as it can affect the outcome of expressions and the performance of your code.
// You can use the precedence list to determine how complex expressions will be evaluated and to avoid unexpected results.
// For example, if you want to ensure that addition is performed before multiplication, you can use parentheses like this: (2 + 3) * 4.
// This will result in 5 * 4 = 20, rather than 2 + 12 = 14. 
// In summary, operator precedence is a fundamental concept in JavaScript that determines the order in which operators are evaluated in an expression.
// Understanding operator precedence is crucial for writing correct and efficient JavaScript code, as it can affect the outcome of expressions and the performance of your code.
// By using parentheses to override the default precedence, you can control the order of operations and ensure that your code behaves as expected.
// Here is a simple example to illustrate operator precedence in JavaScript:
let a = 5;
let b = 10;     
let c = 15;
let result = a + b * c; // Multiplication has higher precedence than addition
console.log(result); // Output: 155 (5 + 10 * 15 = 5 + 150 = 155)
// If you want to change the order of operations, you can use parentheses:
result = (a + b) * c; // Addition is performed first
console.log(result); // Output: 225 ((5 + 10) * 15 = 15 * 15 = 225)
// In this case, the addition is performed first because of the parentheses, resulting in 15 * 15 = 225.
// Understanding operator precedence is essential for writing correct and efficient JavaScript code.
// You can use the precedence list to determine how complex expressions will be evaluated and to avoid unexpected results.
// For example, if you want to ensure that addition is performed before multiplication, you can use parentheses like this:
result = (a + b) * c; // Addition is performed first
console.log(result); // Output: 225 ((5 + 10) * 15 = 15 * 15 = 225) 
// This will result in 15 * 15 = 225, rather than 5 + 150 = 155.
// In summary, operator precedence is a fundamental concept in JavaScript that determines the order in which operators are evaluated in an expression.  
// Understanding operator precedence is crucial for writing correct and efficient JavaScript code, as it can affect the outcome of expressions and the performance of your code.
// By using parentheses to override the default precedence, you can control the order of operations and ensure that your code behaves as expected.  
// You can also use the precedence list to determine how complex expressions will be evaluated and to avoid unexpected results.
// Here is a simple example to illustrate operator precedence in JavaScript:            
let x = 2;
let y = 3;          
let z = 4;
let result2 = x + y * z; // Multiplication has higher precedence than addition  
console.log(result2); // Output: 14 (2 + 3 * 4 = 2 + 12 = 14)
// If you want to change the order of operations, you can use parentheses:
result2 = (x + y) * z; // Addition is performed first
console.log(result2); // Output: 20 ((2 + 3) * 4 = 5 * 4 = 20)
// In this case, the addition is performed first because of the parentheses, resulting in 5 * 4 = 20.
// Understanding operator precedence is essential for writing correct and efficient JavaScript code.
// You can use the precedence list to determine how complex expressions will be evaluated and to avoid unexpected results.
// For example, if you want to ensure that addition is performed before multiplication, you can use parentheses like this:
result2 = (x + y) * z; // Addition is performed first
console.log(result2); // Output: 20 ((2 + 3) * 4 = 5 * 4 = 20)
// This will result in 5 * 4 = 20, rather than 2 + 12 = 14. 
// In summary, operator precedence is a fundamental concept in JavaScript that determines the order in which operators are evaluated in an expression.
// Understanding operator precedence is crucial for writing correct and efficient JavaScript code, as it can affect the outcome of expressions and the performance of your code.
// By using parentheses to override the default precedence, you can control the order of operations and ensure that your code behaves as expected.
// You can also use the precedence list to determine how complex expressions will be evaluated and to avoid unexpected results.
// Here is a simple example to illustrate operator precedence in JavaScript:
let p = 8;
let q = 2;
let r = 4;      
let result3 = p - q / r; // Division has higher precedence than subtraction
console.log(result3); // Output: 6 (8 - 2 / 4 = 8 - 0.5 = 7.5)
// If you want to change the order of operations, you can use parentheses:
result3 = (p - q) / r; // Subtraction is performed first    
console.log(result3); // Output: 1.5 ((8 - 2) / 4 = 6 / 4 = 1.5)
// In this case, the subtraction is performed first because of the parentheses, resulting in 6 / 4 = 1.5.
// Understanding operator precedence is essential for writing correct and efficient JavaScript code.
// You can use the precedence list to determine how complex expressions will be evaluated and to avoid unexpected results.
