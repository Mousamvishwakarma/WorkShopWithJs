// This is my game to guessing a number ??
const max = prompt("Enter your max number ");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("guess a number");
while (true) {
    if (guess == "quit") {
        console.log("user quit");
        break;
    }
    if (guess == random) {
        console.log("you are rigth! congrats Sir!!")
        break;
    }
   else if(guess < random){
    guess =prompt("hint :your guess number was too small. plece try agin:");
   }
   else{
    guess = prompt("hint:your guess number was too large. try agin ");
   }
}

//sum basic
// function sum(a,b){
//     console.log(a+b);
// }
// 

//This is to find you Adult or not
// function isAdult(age){
//     if(age>=18){
//         return "adult"
//         console.log("bye bye");
//     }else{
//         return "not adult"
//     }
// console.log("bye bye");
// }

//this is a outer amd innerFunction proigram
// function outerfunc(x,y){
//     let lask =(x*y);
//     console.log(lask)
//     function innerFunc(){
//         console.log(x*(x-y));
//     }
//     innerFunc();
// }

//Avrage of number print 
// function clarAvg(a,b,c){
//     let Avg =(a+b+c)/3;
//     console.log(Avg)
// }
// clarAvg(14,10,12);


//This is basic table print 
// function printTable(n) {
//     for (let i = n; i <= n * 10; i += n) {
//         console.log(i)
//     }
// }
// printTable(2)


//this is sum or 1to n number 
// function getSum(n) {
//     let sum = 0;
//     for(let i =1; i<=n;i++){
//         sum +=i;
//     }
//     return sum;
// }


//this is concat a string by arry

let str=["hy ", "i am ", "your ", "mousam","!"];

function concat(str){
    let result="";
    for(let i =0; i<str.length; i++){
        result += str[i];
    }
    return result;
}

// This is my function and global scope
// let sum =55; //global scope

// function calSum(a,b){
//     let sum= a+b; //function scope
//     console.log(sum);

// }
// calSum(1,4);
// console.log(sum);


// //block scope
// let age =18;

// if(age>=18){
//     console.log("derive a car");
//  }
// else{
//     console.log("nothing drive a car");

// }


// lexical scope

// function outerFunc(){
//     let x= 3;
//     let a=55;
//     let y= 7;
//     function innerFunc(){
//         console.log(x);
//         console.log(y); 
//     }
//     innerFunc();   
//     console.log(a);

// }

// //This is my all scopes
// let greet =  " hello";//global scopr

// function changeGreet(){
//     let greet = "namasteIndia";//function scope
//     console.log(greet);

//     function innerGreet(){
//         console.log(greet);//lexical scope 
//     }
// }
// console.log(greet);
// changeGreet();

// FUNCTION EXPROSSIONS
// let hello = function(){
//     console.log("hello sir!");

// }
// function mutliGreet(don, count) {
//     for (let i = 1; i <= count; i++) {
//         don();
//     }
// }
// let greet = function () {
//     console.log("hello");
// }
// mutliGreet(greet, 10);

//oddEven list

// function oddEvenFactory(request) {
//     if (request == "odd") {
//         let odd = function(n) {
//             console.log(!(n % 2 == 0)); 
//         };
//         return odd;
//     }
//     else if (request == "even") {
//         let even = function (n) {
//             console.log(n % 2 == 0);
//         }
//         return even;
//     } else {
//         console.log("wrong request");

//     }
// }
// let request = "odd"//even


// function oddEvenFactory(request){
//     if(request=="odd"){
//         let odd = function(n){
//             console.log(!(n%2==0));
//             }
//             return odd;
//     }else if(request=="even"){
//         let even = function(n){
//             console.log(n%2==0);   
//         }
//         return even;
//     }else{
//         console.log("wrong request");
//     }
// }
// let request ="odd"//even

//caluclator 
// const caluclator={
//     num: 55,
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     multi: function(a,b){
//         return a*b;
//     }
// };

//uses for this keyword
// const student={
//     name:"mousam",
//     age:23,
//     eng:98,
//     math:96,
//     phy:94,
//     getAvg(){
//       let avg = (this.eng + this.math + this.phy) / 3;
//       console.log(`${this.name} got avg marks =${avg}`);

//     }
//     }

//used of try thro catch program
// try{
// console.log(a);
// } catch(erroe){
// console.log(erroe);
// }
// console.log("hello01");
// console.log("hello11");
// console.log("hello21");
// console.log("hello31");

//this is Arrow function
// const sum =(a,b) =>{
//   console.log(a+b);
// };

// const cobe = n =>{
//   return n*n*n;
// };

// const pow =(a,b)=>{
//   return a **b;
// }
// const func= (a,b) => (a*b);

// //stetimeout program
// console.log("hello Mousam");
//  let id1= setTimeout(() =>{
//   console.log("CSK win a match");

//  },5000);
// console.log("MI vs CSK");

// //setInterval function
// let id2 =setInterval(()=>{
//   console.log("hello word");

// },1000);
// console.log(id2);

// const student={
//   name:"aman",
//   marks:52,
//   prop:this,
//   getName: function(){
//     console.log(this);
//     return this.name;
//   },
//   getMarks: ()=>{
//     console.log(this);
//     return this.name;
//   }
// };

// Array_Mathod'S
// foreach
// let arr=[1,2,3,4,5];
// // there are two type to diff.
// // 01_type
// function print(el){
//   console.log(el);
// }
// arr.forEach(print);

// // 02_type
// arr.forEach(function print(el){
// console.log(el);

// });

// // 03_TYPE
// let arr=[{
//   name:"mousam",
//   marks:90
// },
// {
// name:"radhay",
// marks:80
// },
// {
//   name:"yogi",
//   marks:90.9
// }];
// arr.forEach((student)=>{
//   console.log(student.name);
//   // console.log(student.name);

// })

// // Map
// let students=[{
//   name:"mousam",
//   marks:96,
// },
// {
// name:"radhay",
// marks:87,
// },
// {
//   name:"yogi",
//   marks:93,
// },
// ];
//  let gpa= students.map((el) => {
//   return el.marks/ 10;

//  });

//  every function

// let c=[2,4,6,8,10,12].every((el)=> el%2 == 0);

//reduce mathod
// let num=[1,2,3,4,5];
// let finalValue= num.reduce((res,el)=> {
//   console.log(res);
//   return el+res
// });
//  console.log(finalValue);

//max value's function
//  let num =[2,3,4,6,6,32328,88,33];

//  let result =num.reduce((max,el)=>{
//   console.log(max);

//   if(el>max){
// return el;
//   }else{
//     return max;
//   }
//  }); 
//  console.log(result);

//  // next type
//  let arr=[7,2,3,5,9];
//  let max =0;

//  for(let i=0;i<arr.length; i++){
//   if(max<arr[i]){
//     max=arr[i];
//   }
//  }
//  console.log(max);
// minn function 
// let num=[1,2,3,4,5,6,-7];

//  let res = num.reduce((min,el)=>{
//   console.log(min);
//   if(el > min){
// return el;
//   }else{
//     return min;
//   }
//  }); 
//  console.log(res);
//  let nums =[2,3,4,6,6,328,88,33];

//  let result =nums.reduce((max,el)=>{
//   console.log(max);

//   if(el>max){
// return el;
//   }else{
//     return max;
//   }
//  }); 
//  console.log(result);

//defauilt prameters:

// function sum(a,b=3){
//   return a+b;
// }
//  //spread mathod
//  let arr=[8,4,5,9];
//  let newArr=[...arr];
//  console.log(arr);

//rest functin
//  function sum(...age){
//   for(let i=0;i<age.length;i++){
//     console.log("you gave as:",age[i]);

//   }
//  }


//main javascript

// let para1 = document.createElement("p");
// para1.innerText = "hey I'am red!";
// document.querySelector("body").append(para1);

// para1.classList.add("red");

// let h3 = document.createElement("h3");

// h3.innerText = " hey i am blue:";

// document.querySelector("body").append(h3);
// h3.classList.add("blue");

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");
// h1.innerText = "i am in div ";
// para2.innerText = "Mee Two !";

// div.append(h1);
// div.append(para2);
// div.classList.add("box");

// document.querySelector("body").append(div);

// let btns= document.querySelectorAll("button");
// // console.dir(btn);
// // btn.onclick= function(){
// //     console.log("button was click");

// // };

// for(btn of btns){
//     btn.onclick = sayHello;
//     btn.onmouseenter =function(){
//     console.log("you click me!");

//     }
// }
//  function sayHello(){
//     console.log("hello sir");

//  };
// 
// 
// addEventListener----------------->-

// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//     // btn.onclick = sayHello;
//     // btn.onclick = sayName;

//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("click", sayName);
// }

//     function sayHello() {
//         console.log("hello sir");
//     };

//     function sayName() {
//         console.log("hello mousam  sir");
//     };

// 25 day q2
// function one(){
//     return 1 ;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }
// three();

// setTimeout(()=>{
//     console.log("appna college");


// },2000);
// // console.log("hello");
// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColor) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColor) nextColor();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orenge", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000, () => {
//                     changeColor("darkpink", 1000, () => {
//                         changeColor("black", 1000, () => {
//                             changeColor("pink", 1000, () => {
//                                 changeColor("purpal", 1000, () => {
//                                     changeColor("skyblue", 1000, () => {

//                                     });
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

// promises Object
// resolve& reject 

// function saveDb(data){
//     return new Promise((seccess , failure)=>{
//         let internetSpeed = Math.floor(Math.random() * 10)+1;  
//         if (internetSpeed>4){
//             seccess("data  was save : seccess");
//         }else{
//             failure("data not save : failure");
//         }
//     });
// }
// // saveDb("aapna college");

// promises then()& catch() mathods

// function saveDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("data  was save : seccess");
//         } else {
//             reject("weak conection  : failure");
//         }
//     });
// }
// saveDb("appna college")
// .then(()=>{
//     console.log("data one save1:");
//     return saveDb("hello world")
// })
// .then(()=>{
//     console.log("data two save2:");
//     return saveDb("mousam")
// })
// .then(()=>{
//     console.log("data tree save3:");
//     return saveDb("vishwakarma")
// })
// .catch(()=>{
//     console.log("promises was reject");
// })
// //  promises improved version

// function saveDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("data  was save : seccess");
//         } else {
//             reject("weak conection  : failure");
//         }
//     });
// }
// saveDb("appna college")
// .then((request)=>{
//     console.log("data1 saved:");
//     console.log("result of promises:",request);
//     return saveDb("hello world")
// })
// .then((request)=>{
//     console.log("data2 saved:");
//     console.log("result of promises:",request);
//     return saveDb(" world")
// })
// .then((request)=>{
//     console.log("data1 saved:");
//     console.log("result of promises:",request);
// })
// .catch(()=>{
//     console.log("promises was reject");
//     console.log("error of promises: ",error);

// })

// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return  new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() *10)+1;
//             if(num>3){
//                 reject("promise rejected");
//             }
//             h1.style.color = color;
//             console.log(`color change to ${color}!`);
//             resolve("color changed!");
//         }, delay);
//     });
// }

// async function demo() {
//     try{
//         await changeColor("red",1000);
//         await changeColor("orange",1000);
//         await changeColor("green",1000);
//         await changeColor("blue",1000);
//     }catch(err){
//         console.log("error ");
        
//         console.log(err);
        
//     }
   
// }











// async function name(params) {}

// async function greet() {
//     throw "404 page not found pls try agen"
//     return "hello"
// }
// greet()
//     .then((result) => {
//         console.log("promises was resolve:");
//         console.log(" result was", result);
//     })
//     .catch((err) => {
//         console.log("promise was rejected with err: ", err);
//     });

// greet function

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo() {
//     await getNum();
//     getNum();
//     getNum();
// }