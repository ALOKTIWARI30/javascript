// const tinderUser=new Object()//singleton

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedOn=false

// console.log(tinderUser)

const regularUser={
    email:"some@gmsil.com",
    fullname:{
        userfullname:{
              firstname:"hitesh",
              lastname:"choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1={a:"1",b:"2"}
const obj2={c:"3",d:"4"}

// const obj3={obj1,obj2}
// console.log(obj3)

// const obj4=Object.assign({},obj1,obj2)//we give empty parenthesis to make sure
// that both the objects are combined

const obj4={... obj1,... obj2}
console.log(obj4)


const User=[
    {

    },
    {},
    {},
    {}
]
console.log(tinderUser)

console.log(Object.keys(tinderUser))//return type will be array then we will be able
//to access the properties of array
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))//output will be array where each index will 
//be combination of key value pairs 
// console.log(tinderUser.hasOwnProperty(isLoggedOn))//it tells that whether object has a 
//particular property or not




const course={
    coursename:"JS in hindi",
      price:999,
      courseinstructor:"Hitesh Choudhary"
}

// course.courseinstructor

const {courseinstructor:instructor}=course//after semicolon we write to simplify 
//names
console.log(courseinstructor)

//JSON ->OBJECT ONLY WITH {} BRACES
// {
// "name":"Hitesh",
// "coursename":"js in hindi",
// "price":"free"
// }