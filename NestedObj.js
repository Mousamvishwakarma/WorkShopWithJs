// //01 Destructure Nested Object
// const user ={
// Name: "alice",
// detail:{
//     age:25,
//     city:"paris"
// }
// };
// console.log(user.detail.city);
// console.log(user.detail.age);

// //02 marge Object 
// const obj1 = {
//     a:1,
//     b:2
// }
// const obj2 ={
//     b:3,
//     c:4
// }
// const marge = { ...obj1, ...obj2};
// console.log(marge);

// //03 convert object to arry
// const product = {
//     id:1,
//     Name: "yogi",
//     Phone: +918889691075
// }
// const result = Object.entries(product)
// console.log(product);

// // console.log(product.Name);

// //04 update Nested Vlaue Without Multion
// const person={
//     Name: "john",
//     address:{
//         city: "London",
//         zip: 12345
//     }
// };
// person.city = "Tokyo"
// console.log(person);

//05 filter Object

// const score ={
//     Alice:85,
//     bob:58,
//     Charile:90,
//     Dave:45
// };
// const result ={
// if()
// }

// const scores = {
//     Alice: 85,
//     Bob: 58,
//     Charlie: 90,
//     Dave: 45
// };
// const result = {};

// for (let marks in scores) {
//     if (scores[marks] >= 60) {
//         result[marks] = scores[marks];
//     }
// }

// console.log(result);

//<----------------JAVASCRIPT ARRAY QUESTIONS------------------------->

//Remove Duplicates
const arr = [1,2,2,3,4,4,5]
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

//Sort Object by Property

const users = [ 
{ name: "John", age: 30 }, 
{ name: "Alice", age: 25 }, 
{ name: "Bob", age: 28 } 
];
// console.log(users);
const sortAge = users.sort((a, b) => a.age - b.age);
console.log(sortAge);

