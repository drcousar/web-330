/*
============================================
; Title:  Assignment 1.4
; Author: Don Cousar
; Date:   24 Feb 2019
; Description: This program demonstrates Node Server
;===========================================
Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>
*/

// start program

//Call Header Info
var header = require('../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 1.4"));
console.log('\n');

//vehicle classes
function Car(model) {
    this.model = model;
   }

function Truck(model, year) {
    this.model = model;
    this.year = year;
   }
   
function Jeep(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
   }

//Create start prototypes
Car.prototype.start = function() {
    console.log("Car added to the racetrack!");
};

Truck.prototype.start = function() {
    console.log("Truck added to the racetrack!");
};

Jeep.prototype.start = function() {
    console.log("Jeep added to the racetrack!");
};

//Instantiate racetrack array
var racetrack = [];

//Add vehicle to the racetrack
function driveIt(vehicle) {
    vehicle.start();
    racetrack.push(vehicle);
}

//Create 3 class entries
var cadillac = new Car("DTS");
var sierra = new Truck("Sierra", 2019);
var cheeroke = new Jeep("Cheeroke", 2017, "Black");

//add entries to class
driveIt(cadillac);
driveIt(sierra);
driveIt(cheeroke);

//iterate over racetrack array and print contents
console.log("\n-- The following vehicles have been added to the racetrack --");

for (var k = 0; k < racetrack.length; k++) {
    console.log(racetrack[k].constructor.name + ": " + racetrack[k].model);
}

//end program