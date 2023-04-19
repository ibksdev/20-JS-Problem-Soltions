//Q9: Give an array of numbers, remove all duplicates.
//define an array with some integer number
const numbers=[1,3,5,1,3,2,4,6,8,5,3,2,4,6];
const uniqueNumber = [... new Set(numbers)];// use set() for containing unique number and spread operator use spread the array new array called uniqueNumber.

//print the unique numbers/
console.log(uniqueNumber);