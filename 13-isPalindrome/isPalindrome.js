function isPalindrome(word) {
  word = word.toLowerCase().replace(/[^a-z]+/g,"");
   return word === word.split("").reverse().join("")
}

// Do not edit this line;
module.exports = isPalindrome;