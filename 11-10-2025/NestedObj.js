//01 Destructure Nested Object
const user ={
Name: "alice",
detail:{
    age:25,
    city:"paris"
}
};
console.log(user.detail.city);
console.log(user.detail.age);

//02 marge Object 
const obj1 = {
    a:1,
    b:2
}
const obj2 ={
    b:3,
    c:4
}
const marge = { ...obj1, ...obj2};
console.log(marge);

//03 convert object to arry
const product = {
    id:1,
    Name: "yogi",
    Phone: +918889691075
}
const results = Object.entries(product)
console.log(product);

// console.log(product.Name);

//04 update Nested Vlaue Without Multion
const person={
    Name: "john",
    address:{
        city: "London",
        zip: 12345
    }
};
person.city = "Tokyo"
console.log(person);

// 05 filter Object
const scores = {
    Alice: 85,
    Bob: 58,
    Charlie: 90,
    Dave: 45
};
const resultss = {};

for (let marks in scores) {
    if (scores[marks] >= 60) {
        resultss[marks] = scores[marks];
    }
}

console.log(resultss);

//<----------------JAVASCRIPT ARRAY QUESTIONS------------------------->

//1 Remove Duplicates
const arr1 = [1,2,2,3,4,4,5]
const uniqueArr1 = [...new Set(arr1)];
console.log(uniqueArr1);

// 2. Flatten Nested Array 
const arr2 = [1, 2, 2, 3, 4, 4, 5];

const uniqueArr2 = [...new Set(arr2)];

console.log(uniqueArr2);

//3 Sort Object by Property
const users1 = [ 
{ name: "John", age: 30 }, 
{ name: "Alice", age: 25 }, 
{ name: "Bob", age: 28 } 
];
// console.log(users);
const sortAge = users.sort((a, b) => a.age - b.age);
console.log(sortAge);


//5 Transform Array of Objects 
const users2 = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];

let result = {};

users.forEach(user => {
  result[user.id] = user.name;
});

console.log(result);

// 4. Group Elements by Property 
const people = [ 
  { name: "Tom", gender: "male" }, 
  { name: "Sara", gender: "female" }, 
  { name: "Alex", gender: "male" } 
];

let male = [];
let female = [];

people.forEach(p => {
  if (p.gender === "male") {
    male.push(p.name);
  } else {
    female.push(p.name);
  }
});

let grouped = { male, female };

console.log(grouped);


