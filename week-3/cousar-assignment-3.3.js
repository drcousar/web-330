/*
============================================
; Title:  Assignment 3.3
; Author: Don Cousar
; Date:   10 Mar 2019
; Description: This program demonstrates the
;   use of The Singleton Pattern
;===========================================
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

Does database instances match? true
*/

// start program

//Call Header Info
var header = require('../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 3.3"));
console.log('\n');

//Create DB Instance
var databaseSingletonTest = (function() {
var instance;
function createInstance() {
    var oracleDatabase = new Object("Database instance initialized!");
    return oracleDatabase;
}

//Get Instance
return {
    getInstance: function() {
        if (!instance) {
            instance = createInstance();
            }
        return instance;
        }
    }
})();

//Test instances and see if they match
function databaseInit() {
    var databaseInstance1 = databaseSingletonTest.getInstance();
    var databaseInstance2 = databaseSingletonTest.getInstance();
    console.log("Does database instances match? " + (databaseInstance1 === databaseInstance2));
}

databaseInit();

//End Program