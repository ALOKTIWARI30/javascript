// console.log(2>1)
// console.log(2>=1)
// console.log(2<=1)
// console.log(2!=1)
// console.log(2==1)

// console.log("2">1)
// console.log("02">1)

//the above 2 will produce correct results i.e. true as it will automatically 
//convert string to a number but sometimes it does not gives predictable result 
//so always try ot compare values having same datatypes

// console.log(null>0)//false
// console.log(null==0)//false
// console.log(null>=0)//true

//the reason is that equality and conversion operators work differently conversion
//convert null to a number treating as 0

console.log(undefined==0)
console.log(undefined>0)
console.log(undefined<0)

//output of all the 3 will be false

//=== it checks values as well as the datatypes