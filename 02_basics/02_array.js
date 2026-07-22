const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)//it gives array inside array i.e. whole array of 
//dc_heroes gets copied as an element of an array

// console.log(marvel_heroes[3])//dc_heroes array
// console.log(marvel_heroes[3][1])

// const allheroes=marvel_heroes.concat(dc_heroes)
// console.log(allheroes)

const allnewheroes=[...marvel_heroes,...dc_heroes]
console.log(allnewheroes)

const another_array=[1,2,3,[4,5,6],7,8,[4,2,3,[3,4]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))//it creates an array
console.log(Array.from({name:"Hitesh"}))//[]

let score1=400
let score2=500
let score3=600

console.log(Array.of(score1,score2,score3))

