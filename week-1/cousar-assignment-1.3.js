/*
============================================
; Title:  Assignment 1.3
; Author: Don Cousar
; Date:   23 Feb 2019
; Description: This program demonstrates the
;   use of Classes
;===========================================

 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>

*/

// start program

//Call Header Info
var header = require('../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 1.3"));
console.log('\n');

//Build Object
function CellPhone(manufacturer, model, color, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    this.getPrice = function() {
        return this.price;
    };
    
    this.getModel = function() {
        return this.model;
    };

    this.getDetails = function() {
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() + "\nColor: " + this.color + "\nPrice: " + this.getPrice();
    };
    
}
    //Define and print cellphone details
    var cellphone = new CellPhone("Apple", "iPhone XS Max", "Black", "$1099.00");
    console.log(" -- DISPLAYING CELL PHONE DETAILS --")
    console.log(cellphone.getDetails());

// end program