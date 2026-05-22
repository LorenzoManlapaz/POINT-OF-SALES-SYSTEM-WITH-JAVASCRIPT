/*
=====================================
POINT OF SALES SYSTEM
USING JAVASCRIPT DOM
=====================================
*/

/*
Array for storing
customer orders
*/

var orders=[];

/*
Variable for
total price
*/

var total=0;

/*
Function for adding
orders to the table
*/

function addOrder(
product,
price
){

/*
Create object
for product
*/

var item={

name:product,
price:price

};

/*
Add object
to orders array
*/

orders.push(item);

/*
Add price
to total
*/

total=
total+
price;

/*
Display orders
*/

displayOrders();

}

/*
Function for
displaying orders
*/

function displayOrders(){

/*
Get table body
*/

var orderList=
document.getElementById(
"orderList"
);

/*
Clear table first
*/

orderList.innerHTML=
"";

/*
Loop through
orders array
*/

for(
var i=0;
i<orders.length;
i++
){

/*
Create row
*/

var row=
"<tr>" +

"<td>" +
orders[i].name +
"</td>" +

"<td>₱" +
orders[i].price +
"</td>" +

"</tr>";

/*
Add row
to table
*/

orderList.innerHTML=
orderList.innerHTML
+
row;

}

/*
Display total
*/

document.getElementById(
"total"
).innerHTML=

"Total: ₱" +
total;

}