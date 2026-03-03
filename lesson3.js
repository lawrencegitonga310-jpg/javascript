//while loop
// below is a simple syntax of the while loop
//1. initialization of a variable
//2.while keyword
//3.condition to be checked
//4.body of the while loop
//5.increament/decrement

let i = 0;


while(i <= 10){
    console.log("The new value of i is:", i)
    i++
}

console.log("===============================")
//come up with a js example of a map loop
//it creates a new array

const users =[
    {id: 1, name: 'lawrence', email: 'lawrence.gmail.com'},
    {id: 1, name: 'lewis', email: 'lawis.gmail.com'},
    {id: 1, name: 'jane', email: 'jane.gmail.com'}
];
//extract only the names into a simple stering array
const userNames = users.map(user => user.name);
console.log(userNames);
//output["Lawrence","lewis","jane"]

console.log("===================================")
//a new array
let number =[1,2,3,4,5];
let squares =number.map(num => num**2)
console.log(squares)

//check the tasks on page 30 of the book