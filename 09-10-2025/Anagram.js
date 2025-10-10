function Anagram(str1, str2){
    return str1.split('').sort().join('') == str2.split('').sort().join('');

}
console.log(Anagram("mousam","samuom"));
console.log(Anagram("gyan sagar college"," nyag sarg cllgeeo "));
console.log(Anagram("listen", "silent")); 

