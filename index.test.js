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

test('check if "madam" is a palindrome', () => {
  expect(isPalindrome("madam")).toBe(true);
});

test('check if "hello" is not a palindrome', () => {
  expect(isPalindrome("hello")).toBe(false);
});

// Test empty string
test('check if "" is a palindrome', () => {
  expect(isPalindrome("")).toBe(true);
});

// Test single character
test('check if "a" is a palindrome', () => {
  expect(isPalindrome("a")).toBe(true);
});

// Test sentence is a palindrome
test('Test "racecar" is a palindrome', () => {
  expect(isPalindrome("racecar")).toBe(true);
});

// Test passing in an array
test('Test ["racecar"] is a palindrome', () => {
  expect(isPalindrome(["racecar"])).toBe(true);
});
