// 1. Paste the code from the requiremnent into your HTML file

// 2. Take the contents of the sonnet div and place it in a variable

var wholeSonnet = document.getElementById("sonnet").innerHTML;

// 3. Find and output the starting position of the word "orphans"

// The indexOf() method returns the position of the first occurrence of a specified value in a string.
// This method returns -1 if the value to search for never occurs.
// Note: The indexOf() method is case sensitive.

var startPosition = wholeSonnet.indexOf("orphans");
console.log(startPosition);

console.log("The starting position of the word 'orphans' is " + startPosition);

// 4. Output the number of characters in the sonnet

// JavaScript String Length Property
// The length property returns the length of a string (number of characters).
// The length of an empty string is 0.

var sonnetLength = wholeSonnet.length

console.log("There are " + sonnetLength + " characters in this sonnet.");

