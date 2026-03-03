#what is the difference between dictionary in python an object in javascript and a json data when dealing with APIs


#1️⃣ Python Dictionary (dict)

#What it is:
#A native Python data structure used to store key–value pairs.

# person = {
    # "name": "Lawrence",
    # "age": 25,
    # "is_student": True
# }
#Key points

#Exists only inside Python

#Keys can be strings, numbers, tuples

#Values can be any Python type (lists, dicts, objects, etc.)

#Not directly usable by other languages

#In APIs

#Used before sending data or after receiving data

#Python converts dicts ↔ JSON automatically using libraries

#import json
#json_data = json.dumps(person)  # dict → JSON

#///////////////////////////////////////////////////////////////////////////////////////////////////////////#
#2️⃣ JavaScript Object

#What it is:
#A native JavaScript data structure made of key–value pairs.

#const person = {
 # name: "Lawrence",
  #age: 25,
  #isStudent: true
#};
#Key points

#Exists only in JavaScript

#Keys are usually strings

#Values can be functions, arrays, objects, etc.

#Very flexible (can include methods)

#const user = {
 # name: "Lawrence",
  #greet() {
   # console.log("Hello!");
  #}
#};
#In APIs

#Used internally in JavaScript apps

#Must be converted to JSON before sending over the network

#JSON.stringify(person); // Object → JSON
#//////////////////////////////////////////////////////////////////////////////////////////////////////////////

#3️⃣ JSON (JavaScript Object Notation)

# What it is:
#A language-independent data format used to exchange data between systems.

# {
#   "name": "Lawrence",
#   "age": 25,
#   "is_student": true
# }
# Key points

# Not a programming object

# Text-based

# Strict rules:

# Keys must be strings

# No functions

# No comments

# Universally understood by APIs

# 🧠 The Big Difference (At a Glance)
# Feature	Python Dictionary	JavaScript Object	JSON
# Language-specific	✅ Python only	✅ JavaScript only	❌ Language-neutral
# Used in APIs directly	❌	❌	✅
# Supports functions	❌	✅	❌
# Data type	In-memory object	In-memory object	Text format
# Needs conversion for APIs	Yes	Yes	No
# 🔁 How APIs Actually Use Them
#how how errors happen when JSON ≠ object

#Compare with databases like MongoDB

#Just say the word 😄


# python
age = 16

if age < 15:
    print("You are too young to watch this episode.")

elif age >= 15 and age <=18:
    print("You can watch this episode but with parental guidance...")

elif (age >= 18 and age <40):
    print("have a seat and enjoy the show")

else:
    print("You are old enough to watch this episode without parental guidance")


