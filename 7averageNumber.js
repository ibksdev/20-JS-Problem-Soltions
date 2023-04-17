//Q7. Give an array of numbers,  find the average number.

//define elements of array
const numbers =[1,2,3,4,5];
let sum=0; //declare a variable and set initial value 0.
for(let i = 0; i < numbers.length ; i++)
{
	sum+= numbers[i]; //addition of all array elements.
}
const average = (sum / numbers.length) //calculate average with summation and length of array.
console.log(average); //print average number.