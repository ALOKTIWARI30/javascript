// const useremail="h@hitesh.ai"
// if(useremail)
// {
//     console.log("got user email")
// }
// else{
//     console.log("dont have user email")
// }

// falsy values
// false,0,-0,BigInt,0n,"",null,undefined,NaN

//truthy values
//"0",'false',," ",[],{},function(){}

//how to check empty array


const username=[]
if(username.length===0)
{
    console.log("Array is empty")
}

//how to check empty objects
const EmpObj={}
if(Object.keys(EmpObj).length===0)//onject.keys(EmpObj) returns an array
{
    console.log("Object is Empty")
}

//false==''
//false==0
//0==''
//all the above is true

//nullish coalescing operateor(??): null undefined
let val1;
val1=5??10//5
val1=null??10//10
val1=undefined??15//15
val1=null??10??15//first value is assgned //10
console.log(val1)


//ternary operator
// condition ? true : false
const iceteaprice=100
iceteaprice>=80?console.log("greater than 80"):console.log("less than 80")