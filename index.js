console.log(
  `*----------------------------------------
  \nPractical Applications of ChatGPT \nfor software developers and beyond \n
  --------------------------------------*`,
)

// Writing code
console.log('\n ---------- Writing code -------- \n')

console.log(
  'Prompt: Write me a super simple nodejs function that checks if a string is a palindrome',
)
function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('')
  return str === reversedStr
}
console.log('racecar', isPalindrome('racecar'))
console.log('hello', isPalindrome('hello'))

// Improving code
console.log('\n -------- Improving code -------- \n')

console.log('Prompt: Make this function more robust')

function isPalindrome(str) {
  console.log('isPalindrome: ', str)
  const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase()
  const reversedStr = cleanedStr.split('').reverse().join('')
  return cleanedStr === reversedStr
}

console.log(isPalindrome('A man, a plan, a canal: Panama')) // Should return true
console.log(isPalindrome('Not a palindrome')) // Should return false
console.log(isPalindrome('Madam')) // Should return true
console.log(isPalindrome('hello')) // Should return false

// Commenting code
console.log('\n -------- Commenting code -------- \n')

console.log('Prompt: Add comments')

function isPalindrome(str) {
  console.log('isPalindrome: ', str)
  // Remove non-alphanumeric characters and convert to lowercase
  // \W matches any non-alphanumeric character, and _ matches underscores
  // 'g' is a flag that causes the replace to replace all occurrences in the string
  const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase()

  // Split the cleaned string into an array of characters, reverse the array, and join it back into a string
  const reversedStr = cleanedStr.split('').reverse().join('')

  // Check if the cleaned string is the same as the reversed string
  // If they are the same, the original string is a palindrome
  return cleanedStr === reversedStr
}

// Fixing code
console.log('\n -------- Fixing code -------- \n')

console.log('Prompt: My code isnt working')

function isPalindromeBroken(str) {
  console.log('isPalindrome: ', str)
  // Remove non-alphanumeric characters and convert to lowercase
  // \W matches any non-alphanumeric character, and _ matches underscores
  // 'g' is a flag that causes the replace to replace all occurrences in the string
  const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase()

  // Split the cleaned string into an array of characters, reverse the array, and join it back into a string
  const reversedStr = cleanedStr.split('').reverse().joinery('')

  // Check if the cleaned string is the same as the reversed string
  // If they are the same, the original string is a palindrome
  return cleanedStr === reversedStr
}
try {
  console.log(isPalindromeBroken('A man, a plan, a canal: Panama')) // Should return true
} catch (e) {
  console.error(e)
}
