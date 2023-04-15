//Q4: Given an array of strings, create a new array with first letter each string

//define array of strings value
const strings = ["hello","world","foo","boo"];

const firstLetters=[]; //empty array for store first letter

for( let  i = 0; i < strings.length ; i++ ) // loop iterates over each element of the strings
{
	firstLetters.push(strings[i] [0])  //retrive current words using strings[i] and extract the first letter using index 0;
}
//print the letters.
console.log('First Letters:' , firstLetters);


// @ if we want to 2nd letter of this string then need to be change just index 1;

const secondLetters= [];
for( let j = 0; j<strings.length; j++)
{
	secondLetters.push(strings[j][1])
}
console.log('Second Letters:' , secondLetters);

// we can also solve this problem using map()

const firstLetterArray = strings.map( str => str[0])
console.log('Using map: ' , firstLetterArray);