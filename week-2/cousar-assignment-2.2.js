/*
============================================
; Title:  Assignment 2.2
; Author: Don Cousar
; Date:   3 Mar 2019
; Description: This program demonstrates the
;   use of Prototypes
;===========================================
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

//Call Header Info
var header = require('../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 2.2"));
console.log('\n');

//Create getAge function
var person = 
{
    getAge: function()
    {
        return this.age
    }
};

//Create object literal
var john = Object.create(person, {
    "age":
    {
            "value": "25"
    },
    "fullname":
    {
        "value": "John Doe"
    }
});

//write person info to console
console.log("Ther person's fullname is: '%s'", john.fullname);
console.log("The person's age is '%s'", john.age);

// end program