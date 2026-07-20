const name="alok"
const repocount=50
// console.log(name +repocount+"value")//avoid writing using this way
//prefer string interpolation using backticks where we create placeholders where
//we can directly inject the variables

// console.log(`Hello my name is ${name} and my repocount is ${repocount}`)

//${}inside the curly braces we can also perform some methods

//another method to delare string
const gamename= new String('abcdef')//we create js objects
// console.log(gamename[0])
// console.log(gamename.__proto__)//we will get an empty object but actually its not empty
//it has many values

//we can also access different methods 
// console.log(gamename.length)
// console.log(gamename.toUpperCase())//we can also use charat an indexof

const newstring=gamename.substring(0,4)
// console.log(newstring)

const anotherstring=gamename.slice(0,4)
// console.log(anotherstring)

const string1=gamename.slice(-8,4)
//"abcdef" has length 6. The negative index -8 is beyond the beginning of the string,
//  so slice() treats it as index 0.
// console.log(string1)

//substring has no concept of negative index
//in slice neagive index indexing actually start from end

const newstringone =".    alok.      "
// console.log(newstringone)
// console.log(newstringone.trim())

const url="https://hitesh.com/hitesh%20choudhary"//%20 is used as a whitespace as browser does not understand whitespaces
// console.log(url.replace('%20','-'))

// console.log(url.includes('hitesh'))//it is used to tell if url includes

let str = "Alok Tiwari";

let result = str.split(" ");

console.log(result);//output will be an array where every word is an element of the array