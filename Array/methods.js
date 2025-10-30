const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

let a = fruits.length;// length property
document.write(a);

document.write("<br>");

let b = fruits.toString(); // toString() method
document.write(b);

document.write("<br>");

let c = fruits.join(" - "); // join() method
document.write(c);

document.write("<br>");

fruits.pop(); // pop() method
document.write(fruits);

document.write("<br>");
fruits.push("Pineapple"); // push() method
document.write(fruits);

document.write("<br>");
fruits.shift(); // shift() method
document.write(fruits);

document.write("<br>");
fruits.unshift("Strawberry"); // unshift() method
document.write(fruits);

document.write("<br>");
delete fruits [0] // delete method
document.write(fruits);

