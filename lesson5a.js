//Arrow function
//This is a function that was introduced in the ECMA script 6 and they give us the latest way of defining functions in a compact manner
//At times the arrow function can be said to be anonymous function why?This is because they use the names of the variable they are contained in.


const sayHello = () => {
    console.log("This is an arrow function.")
}
sayHello();

//create an arrow function that is able to find the product of three numbers
const multiplyThree = (a, b, c) => a * b * c;

// Example usage:
console.log(multiplyThree(2, 3, 4)); // Output: 24
