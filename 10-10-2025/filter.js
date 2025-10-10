const arr1 =[53,324,64,24,244]
const sortedarr= arr1.sort((a,b)=>b-a)
console.log(sortedarr);

let aarfilter= arr1.filter((i,index)=> i>40)
console.log(aarfilter)


let maparr= arr1.map((el,index)=> el*3)
console.log(maparr)

const sum= arr1.reduce((acc,curr) => acc+curr ,0) //acc=in which value store
console.log(sum)

const findel = arr1.find((el=> el== 24)) 
console.log(findel);

const obj={
Name: "mousam",
age: 20,
Address:{
city: "sagar",
country:"india",
address:'sagar',
clg:'gsce'
},
skills:['java','python']
}
const key = "phone"
console.log(obj.Address[key]);

console.log(obj.Address[key]);

for(let value  in obj ){
console.log(value);

}
for(let key  in obj ){
console.log(key,':',obj[key]);

}

obj.skills.push('python')
obj.age = 20;

const 


