//Q6: Given an array of strings, find the longest string.
//define array of strings
const strings =["hello", "world", "foo", "boo"]

//declare  a variable to store longest array
let  longestString=strings[0];

for(let i = 0; i < strings.length ; i++)
{
	if(strings[i].length > longestString.length) // check if the strings is longer than longest string.
	{
		longestString = strings[i]; //if it is long then store it.
	}
}
//print the LongestString.
console.log(longestString);