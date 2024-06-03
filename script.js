function firstNonRepeatedChar(str) {
	
    const charCount = {};
    
    // Count occurrences of each character in the string
    for (let char of str) {
        if (charCount[char] === undefined) {
            charCount[char] = 1;
        } else {
            charCount[char]++;
        }
    }
    
    // Find the first character with a count of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    // If no non-repeated character is found, return null
    return null;
}

 // Write your code here

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
