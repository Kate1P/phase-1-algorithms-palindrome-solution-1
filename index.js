function isPalindrome(word) {
  // Write your algorithm here
word = word.toLowerCase();
return word === word.split('').reverse().join('');
}

/* 
  Add your pseudocode here
  function isPalindrome(word) {
 let word === word.split('').reverse().join('');
return word 
*/

/*
  Add written explanation of your solution here

1. take a string and return it by comparing it to a reversed string
2. call the split() method with an empty argument. This method takes a string and returns it as an array. Every letter is treated as a separate array element.
3. call the reverse() method. This method takes the entire array and reverses the order.
4. We now have a string with a reverse order. We do, however, require a string.
5. Combine all of the letters using the join(") method, which concatenates the given elements with the delimiter and returns the concatenated string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("Civic"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("dragon"));
}

module.exports = isPalindrome;
