//objects data type;
// An object in javascript is a data type that stores data inform of key value pairs.

let person = {
    Name :"Lawrence Gitonga",
    Age : 23,
    isRegistered : true

};

console.log("the details of a person is:",person)

//first method is by use of square brackets
console.log(person["Age"])

//second method is by use of dots
console.log(person.Name)

//check the datatype
console.log(typeof(person))


//Array data type:
//this refers to collection of items that are on indexes

let fruits = ["Mangos","Pineapples","Apple","Banana","Lemon","Grapes"]

console.log("The entire array of fruits is:", fruits)

//to access the items of an array we use the index
console.log(fruits[3])

//you can slice item of array
console.log(fruits.slice(2, 5))