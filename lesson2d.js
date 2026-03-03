//if...else if ...else statement
//it is used to evaluate multiple conditions

let age = 14

if(age < 15){
    console.log("You are too young to watch this episode.")
}
else if (age >= 15 && age <=18){
    console.log("You can watch this episode but with parental guidance...")
}
else if (age >= 18 && age <40){
    console.log("have a seat and enjoy the show")
}
else{
    console.log("You are old enough to watch this episode without parental guidance")
}