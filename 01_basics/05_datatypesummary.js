/*The data is divided based on  how they are stored in the memoryand how they can be accesed
there are primarily 2 types
primitive =>call by value
non primitive=>call by reference*/

//primitive =>7 types
//string,number,symbol,null,undefined,Boolean,Nigint

//nonprimitive or reference types=>3 types
//return type of non primitive datatype is object
//arrays
//object
//function

// JavaScript is a dynamically typed language.
// This means you don't need to specify the data type when declaring a variable,
//  and the type can change during execution

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid)

const heroes=["a","b","c"]
let myobj={
    name:"alok",
    age=22,
}

const myfunction=function(){
  console.log("hello world")
}

//return type of bugint is undefined
//return type of symbol is symbol


//************************* memory ************************ */

//stack(primitive) ,Heap(non primitive)