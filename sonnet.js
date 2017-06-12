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

// 5. Replace the first occurence of the string "winter" with "yuletide"

// JavaScript String replace() Method
// The replace() method searches a string for a specified value, or a regular expression, 
// and returns a new string where the specified values are replaced.

// Note: If you are replacing a value (and not a regular expression), only the first instance
// of the value will be replaced. To replace all occurrences of a specified value, use the 
// global (g) modifier.

// This method does not change the original string.

var newSonnet = wholeSonnet.replace("winter", "yuletide");

console.log(newSonnet);

document.getElementById("sonnet").innerHTML = newSonnet;