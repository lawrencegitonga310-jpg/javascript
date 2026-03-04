// javascript for loop
// Loops are used to iterate through something (Repeat something a number times)
// Structure of the for loop
// 1. for keyword followed by parenthesis
// 2. initialization ;set the condition ;increament/decrement
// 3. body of the for loop


for(let i = 0; i <= 10; i++){
    console.log("The new value of i is:",i)
}
console.log("=============================================")

for(let i = 0; i <=8; i++){
    if( i ===6){
        console.log("The number is :", i)
    }
    else{
        console.log("The new value of i is :", i)
    }
}

// create a for loop that will be able to print out all the leap years
// Function to check if a year is a leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Loop through years 2000 to 2024
for (let year = 2000; year <= 2024; year++) {
  if (isLeapYear(year)) {
    console.log(year);
  }
}
