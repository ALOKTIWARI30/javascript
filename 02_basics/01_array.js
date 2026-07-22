//array
//js array are resizable and mix of different datatypes
//copy opeation in array create shallow copy i.e. call by reference
const myarr=[1,2,3,4,5]
const myheroes=["shaktiman","nagraj"]

const myarr2=new Array(1,2,3,4,5)
console.log(myarr[2]);

//array methods
myarr.push(6)
myarr.push(7)
console.log(myarr)

myarr.pop() //removes the last element
console.log(myarr)

myarr.unshift(9)//puts the element at the start of the array so all the elemnets gets shifted by 1
console.log(myarr)

myarr.shift()//removes the elements form the statrt so all the elements gets shifted by 1 
console.log(myarr)

console.log(myarr.includes(9))//it tells if the array has a given element and return type in boolean

console.log(myarr.indexOf(9))

const newarr=myarr.join()//convert array to string
console.log(myarr)
console.log(typeof newarr)//return type is string

//slice,splice

console.log("A",myarr)
const myn1=myarr.slice(1,3)//it takes before last index
console.log(myn1)
console.log("B",myarr)

// console.log("A",myarr)
const myn2=myarr.splice(1,3)//also it also takes last index 
console.log(myn2)
console.log("C",myarr)

//splic manipulates the original array 