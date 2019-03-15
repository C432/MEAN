// MaxMinAvg
// Objectives:

// Iterate over an array
// Construct a string
// Use the return statement
// Write a function that takes an array of numbers as a parameter. Find the maximum number, the minimum number, and the average of all the numbers in the array. Return these values in a nicely formatted string.

// Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."

// Function MaxMinAvg(arr);
// var Max = arr[0];
// var Min = arr[0];
// var Sum = 0;
//         for(i = 1; i < arr.length; i++){
//             if (Max < arr[i]){
//             Max = arr[i];
//         }
//         for(i = 1; i < arr.length; i++){
//             if (Min > arr[i]){
//             Min = arr[i];
//         }
//         for(i=0; i<arr.length; i++){
//             sum+=arr[i]
//         }

//     var Avg = sum/arr.length;

//     console.log(Max, Min, Avg);
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// Fizz Buzz
// Objectives
// Use of the modulus operator
// Familiarity with loops
// Familiarity with conditionals
// Create a function called fizzbuzz that accepts a parameter n. Have the function log all the numbers from 1 to n in order with the following exceptions:

// If the number is divisible by both 3 and 5, log "FizzBuzz" instead of the number
// If the number is divisible by 3 but not by 5, log "Fizz" instead of the number
// If the number is divisible by 5 but not by 3, log "Buzz" instead of the number
// Write your code and run it with several examples to ensure it is working as expected. Use the modulus operator!

// Example - fizzbuzz(15) would log the following (each element on its own line):

// 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz
// BONUS 1: Validate the user input. If the function is not passed a positive number, either throw an error or return null.


// function FizzBuzz();
// for(i = 0; i < 100; i++){
//     if(i % 3 == 0 && i % 5 == 0) console.log ("FizzBuzz:" + i);
//     elif(i % 3 == 0 && i % 5 != 0); console.log ("Fizz:" + i);
//     elif(i % 5 == 0 && i % 3 == 0); console.log ("Buzz:" + i);
//     }

