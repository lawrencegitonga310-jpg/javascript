// functions with parameter.
//parameter are values that get passed as arguments when we invoke of function
//They help us to create functions that can be reusable through out a program

function greeting(name){
    console.log("Hello",name,"how have you been?")
}
greeting("Lawrence")
greeting("jane")

console.log("==============================")
//below is a function with parameter to calculate the sum of two numbers 
function addition(number1, number2){
    sum = number1+number2
    console.log("The sum of numbers is:", sum)
}
addition(40, 60)
addition(45, 56)

console.log("===================")
// area of a triangle
function area(base,height,half){
    area= base* height* 0.5
    console.log("The area of a triangle is:", area,"cm\u00B2")
}
area(20, 12)

console.log("===========")
//find the simple interest given the principle as 50000,rate as 5% and time 8 years
function simpleinterest(principle, rate, time){
    simpleinterest=(principle* rate* time)/100
    console.log("The simple interest is:",simpleinterest)
}
simpleinterest(50000, 5, 8)