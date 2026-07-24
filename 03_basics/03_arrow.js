const user={
    username:"hitesh",
    price:999,

    welcomemessage:function()
    {
    console.log(`${this.username} welcome to website` )
    //  console.log(this)
    }
}
// user.welcomemessage()
user.username="sam"
// user.welcomemessage()

// console.log(this)//this will give output as {} as we are in node but in console it will
// give window
//inside browser window is the global object

// function chai()
// {
//     let username="hitesh"
//     console.log(this)//this will print a lot of this
//     // console.log(this.username)//this will give output as undefined as we cannot use
//     //this inside functions it can only be used in objects
// }
// chai()

// const chai=function()
// {
//     let username="hitesh"
//     // console.log(this)
//     console.log(this.username)//this will give output as undefined as we cannot use
//     //this inside functions it can only be used in objects
// }
// chai()
// const chai=()=>
// {
//     let username="hitesh"
//     // console.log(this)//this will print {}
//     console.log(this)//this will give output as undefined as we cannot use
//     //this inside functions it can only be used in objects
// }
// chai()

//regular function console.log(this) gives lot of things
//arrow functions console.log(this) gives {}

// const addtwo=(num1,num2)=>{
// return num1+num2;
// }
// console.log(addtwo(2,3))

//explicit return means return keyword is used
//implicit return means return keyword is not used

//() does not require return keyword
//{} requires return keyword

const addtwo=(num1,num2)=>num1+num2;
console.log(addtwo(2,3))

const addtwo=(num1,num2)=>(num1+num2);
console.log(addtwo(2,3))

//implicit return is used while we return an object
const addtwo=(num1,num2)=>({username:"hitesh"})
console.log(addtwo(2,3))




