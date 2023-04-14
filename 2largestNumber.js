//Q2: Given an array of numbers , find the Largest Number;


//Define an array of numbers

const numbers = [1,2,3,4,5];
let largeNumber = numbers[0]; // Initialize a variable the first element of Large Number

for (let i = 1; i<numbers.length; i++) // using loop for check every elements of this array.
{
	if(numbers[i] > largeNumber) // check current element is larger than the largeNumber. If Large then update it.
	{
		largeNumber= numbers[i];  // update Large Number
	}
}

//print the largest number
console.log(largeNumber);

