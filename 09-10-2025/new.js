


// 1 question  pallindrome = aba =aba true

let str = "madam"
let pllindrome = true
for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        pllindrome = false
        break
    }
}
if (pllindrome) {
    console.log(`${ str } is  pallindrome`)
} else {
    console.log(`${ str } is not pallindrome`)
}



// 2 question  hello java Script
// script java hello

let str1 = "hello java Script"
let word = str1.split(" ")
let reversed = word.reverse().join(" ")
console.log(reversed)




// 3 question Anagrams listen = silent
let str2 = "listen"
let str3 = "silent"
let sorted1 = str2.split('').sort().join('');
let sorted2 = str3.split('').sort().join('');

if (sorted1 === sorted2) {
    console.log(`${ str2 } and ${ str3 } are anagrams`);
} else {
    console.log($`{ str2 } and ${ str3 } are not anagrams`);
}