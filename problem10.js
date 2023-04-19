//Q10. Give me an array of integers, find two number that add up to a target value.

//define array with some integer numbers

const numbers = [2,7,11,15,23];
const target = 9; // declare a variable with target value.
for ( let i = 0; i < numbers.length ; i++) //loop every element of this array.
{
	for( let j = i +1; j < numbers.length; j++ ) // loop next value for add two elements
	{
		if (numbers[i] + numbers[j] === target) // If sum is equal to target value then print two numbers.
		{
			console.log(numbers[i] , numbers[j]); // print two numbers which is equal to target value.
		}
	}
}