"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: Divya Suma Gudise
   Date:  October 7, 2024 
   
   Filename: tc_cart.js
	
*/

var orderTotal = 0;

// cartHTML variable will store the HTML code for the shopping cart table

var cartHTML = "<table>";
cartHTML += "<tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

//loop through the item array, adding one table row for each item ordered

for(var i=0; i < item.length; i++){
   cartHTML += "<tr>";
   cartHTML += "<td>" + "<img src='tc_" + item[i] +".png' alt='" + item[i] + "' /></td>";
   cartHTML += "<td>" + itemDescription[i] + "<td>";
   cartHTML += "<td>$" + itemPrice[i] + "<td>";
   cartHTML += "<td>" + itemQty[i] + "<td>";

   //calculate the cost of the items
   var itemCost = itemPrice[i] + itemQty[i];
   cartHTML += "<td>$" + itemCost[i] + "</td></tr>";
   orderTotal += itemCost;
}

//Add a table row displaying the total cost of the order
cartHTML += "<tr><td colspan='4'>Subtotal</td>";
cartHTML += "<td>$" + orderTotal + "</td></tr>";
cartHTML += "</table>";

document.getElementById("cart").innerHTML = cartHTML;
