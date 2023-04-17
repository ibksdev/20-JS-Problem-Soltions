//Q5.Given array of numbers, create a new array with only the even numbers.

//define array of numbers
const numbers=[1,2,3,4,5];
const evenNumbers=[];   //declare a empty array to store even numbers
for(let i = 0 ; i < numbers.length ; i++ )
{
	//checking number of elements is even or not.
	if(numbers[i] % 2 ===0){
		evenNumbers.push(numbers[i]) // if even then it is add to new array
	}
}
//print even numbers array
console.log(evenNumbers);
