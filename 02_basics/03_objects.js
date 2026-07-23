//object can be created in 2 ways


//1. constructor->singleton
//Object.create


//2. object literals -> it creates multiple instances
//by default system processes keys as string

const mySym=Symbol("key1")
const JsUser={
    name:"Hitesh",
    age:18,
    // mySym:"mykey1",//it will work fine but its return type is string
    [mySym]:"mykey1",//it will work fine and return type is symbol

    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedOn:false,
    lastlogindays:["Monday","Saturday"]

}
console.log(JsUser.email)
console.log(JsUser["email"])//ehile squesre brackets key value has to be written
// within double quotes as it will be treated as a string
// console.log(JsUser.mySym)//symbol cannot be accesed like this
console.log(JsUser[mySym])

console.log(typeof JsUser.mySym)//type is string

JsUser.email="Hitesh@xyz.com"
// Object.freeze(JsUser);//now object is freezed and value will not change
JsUser.email="Hitesh@abc.com"
console.log(JsUser.email)

//to add function

JsUser.greetings=function(){
    console.log("Hello JsUser")
}

//greetingsTwo function is to access the properties of JsUser object
JsUser.greetingsTwo=function(){
    console.log(`hello JsUser ,${this.name}`)
}

console.log(JsUser.greetings)//output is function[anonymous] means that function is 
//not executed anly reference is there
console.log(JsUser.greetings());//not a function. because object is freezed 

console.log(JsUser.greetingsTwo())