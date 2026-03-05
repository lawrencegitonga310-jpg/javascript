//Arrow functions with parameters

const greet = (name) =>{
    console.log("Hello " + name + " How have you been? I trust that you are good") 
}

greet("lawrence");
greet("jane");

console.log("==============================")
//below is the function to find the area of the circle
const CircleArea = (pi, radius) =>{
    let area = pi *radius* radius
    console.log("The area of a circle is:"+ area + "cm\u00B2")
}
CircleArea(3.142, 7)
CircleArea(3.142, 28)

console.log("=================================")
//come up with your own example of an arrow function that utilises 3 parameters.
// Arrow function with 3 parameters
const calculateTotal = (price, quantity, discount) => {
  const subtotal = price * quantity;
  const total = subtotal - discount;
  return total;
};

// Example usage
console.log(calculateTotal(50, 3, 20)); // Output: 130
