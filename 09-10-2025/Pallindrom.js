function palindrome(value){
    return value == value.split('').reverse().join('');
    
}
console.log(palindrome("mousam"));
console.log(palindrome("madam"));
