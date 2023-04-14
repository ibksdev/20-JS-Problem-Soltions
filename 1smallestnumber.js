// Q: Given an array of numbers, find the smallest number.

//define an array of numbers
const numbers=[4,2,7,1,8];
let smallestNumber= numbers[0]; // Initialize a variable the first element of smallest number.

for(let i=1 ; i<numbers.length; i++ )//using loop to check every elements
{
	if (numbers[i] < smallestNumber) // if the current element is smaller than the smallest number than update it. and check another.
	{
		smallestNumber = numbers[i]; // update smallest number.
	}
}

//print the smallest number.
console.log(smallestNumber);
