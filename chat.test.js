// Unit testing
console.log('\n -------- Unit testing -------- \n')

// palindrome.js
function isPalindrome(str) {
  const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

console.log('Prompt: Install jest library')

console.log('Prompt: Write me a simple passing test')
