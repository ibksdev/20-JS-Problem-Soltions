//Q3: Given an array of numbers, Summation of all numbers.

//Define an array elements
const numbers = [1,2,3,4,5];
let sum = 0; // Initialize a variable to store summation.
for ( let i = 0; i < numbers.length; i++) // Using loop and add to sum all array elements
{
	sum += numbers[i]; //summation
}

//print the array of elements
console.log(sum);


// We can also summation this array elements using reduce.
// const newSum= numbers.reduce((a ,c ) => a + c,0 );
// console.log(newSum);