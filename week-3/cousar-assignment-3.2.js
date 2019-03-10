/*
============================================
; Title:  Assignment 3.2
; Author: Don Cousar
; Date:   10 Mar 2019
; Description: This program demonstrates the
;   use of Factory patterns
;===========================================
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {username: "admin", password: "s3cret", server: "localhost:1521", version: "11g"}
Informix {username: "admin", password: "s3cret", server: "localhost:1526"}
*/

// start program

//Call Header Info
var header = require('../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 3.2"));
console.log('\n');

//Create Oracle Class
function Oracle(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:1521";
    this.version = properties.version || "11g";
}

//Create Informix Class
function Informix(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:1526";
}

//Create Database Factories
function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = Oracle;
DatabaseFactory.prototype.createDatabase = function(properties) {

    if (properties.databaseType === "Oracle") {
    this.databaseClass = Oracle;
    } else {
    this.databaseClass = Informix;
    }
 return new this.databaseClass(properties);
};

//Create Oracle Factory
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "admin",
    password: "s3cret"
});

//Create Informix Factory
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "admin",
    password: "s3cret"
});

//Print Oracle object
console.log(oracle);

//Print Informix object
console.log(informix);

//End Program