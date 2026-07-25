//for
// for (let i = 0; i <10; i++) {
//    if(i==5)
//    {
//       console.log("5 is best number")
//    }
//    console.log(i)
    
// }
// for (let i = 0; i <=10; i++) {
//    console.log(`"outer loop ${i}`)
//    for (let j = 0; j <=10; j++) {
//       console.log(`inner loop ${j}`)
      
//    }
   
// }
// let myarray=["flash","batman","superman"]
// for (let i = 0; i < myarray.length; i++) {
//    const element = myarray[i];
//    console.log(element)
   
// }
// let myarray=["flash","batman","superman"]
// for (let i = 0; i <= myarray.length; i++) {
//    const element = myarray[i];
//    console.log(element)
   
// }//in js there is not array index out of bounds 
//instead of that value will be undefined

//break and continue
// for (let i = 1; i <=20; i++) {
//    if(i==5)
//    {
//       console.log(`detected 5`);
//       break;
//    }
//    console.log(`value of i is ${i}`)
// }

for (let i = 1; i <=20; i++) {
   if(i==5)
   {
      console.log(`detected 5`);
      continue;
   }
   console.log(`value of i is ${i}`)
   
}