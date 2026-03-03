//Comparison operators
//they ussually evaluate a boolian
let number1 = 5
let number2 = 10
let number3 = 20

console.log(number1 == number2)
console.log(number1 >= number2)
console.log(number1 <= number2)
console.log(number1 > number2)
console.log(number1 < number2)
console.log(number1 != number2)

//tripple equal sign- research in javascript
//logical operators are used to evaluate two or more conditions and alsom theyb give out a boolean answer
//Logical AND (&&) it evaluates to true if and only if all of the conditions are true
console.log((number1 < number2) && (number2 > number1))

//logical OR (||) it evaluates true if one of the condition is meet
console.log((number1 > number2) || (number2 > number2))

//logical NOT (!) Used to negate a condition
console.log(!(number1 < number2))

