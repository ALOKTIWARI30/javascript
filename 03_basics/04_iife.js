//Immediately invoked function expression(IIFE)
//they are used when we dont require any pollution form the global scope variables
//when we want function to execute immedaitely like if we want to start a database 
//connection immediately

// function chai()
// {
//     console.log("DB conected")
// }
// chai()


//THIS IS AN EXAMPLE OF NAMED IIFE
// (function chai()
//  {
//    console.log("DB conected")
// })();

// ()();//put semicolon in the end
//()()//1st parenthesis is where we write function definition 
//2nd parenthesis is for execution

// (()=>{
//     console.log("DB CONNECTED TWO")
// })();


//THIS IS AN EXAMPLE OF UNNAMED IIFE
// ((name)=>{
//     console.log(`DB CONNECTED TWO ${name}`)
// })("HITESH");

