// // ASSESSMENT 2: Coding Practical Questions with Jest

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// // --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// // a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// // b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

//Pseudo Code:
// input: an object that contains a number key with a value that is a number
// output: a string with a statement that the number located in the object is or is not divisible by three
// Create a function called divByThreeCheck that takes 'object' as a parameter
// access the number inside the object using object.number
// check divisibilty by 3 by using a conditional statement
// if % 3 === 0 is true, return message using string interpolation
// if % 3 === 0 is false, return message using string interpolation
// since we have one condition and two possible outcomes, use conditional ternary operator

// a) Create a test with expect statements for each of the variables provided.

describe("divByThreeCheck", () => {
  it("returns whether or not the number inside an object is divisible by three or not", () => {
    const object1 = { number: 15 }; // Expected output: "15 is divisible by three"
    const object2 = { number: 0 }; // Expected output: "0 is divisible by three"
    const object3 = { number: -7 }; // Expected output: "-7 is not divisible by three"
    expect(divByThreeCheck(object1)).toEqual("15 is divisible by three");
    expect(divByThreeCheck(object2)).toEqual("0 is divisible by three");
    expect(divByThreeCheck(object3)).toEqual("-7 is not divisible by three");
  });
});

// b) Create the function that makes the test pass.

const divByThreeCheck = (object) => {
  return object.number % 3 === 0
    ? `${object.number} is divisible by three`
    : `${object.number} is not divisible by three`;
};

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
// --------------------Pseudo Code---------- //
//input: Array of  various words (array of strings)
//output: an array of the same words with the first letter capitilized
// Create a function called wordCapitilizer that takes an array as a parameter
// iterate through each string in the function using map
// For each string in the array:
// access the first index in the string using [0]
// use .toUpperCase() to capitilize the first letter
// use concatenation to add the now-capitilized letter to the rest of the string:
// use .substring() at index 1 to access the rest of the string
// the map function will then return the new array meeting the conditions

// a) Create a test with expect statements for each of the variables provided.

describe("wordCapitilizer", () => {
  it("returns an array with all the words capitalized", () => {
    const randomNouns1 = [
      "streetlamp",
      "potato",
      "teeth",
      "conclusion",
      "nephew",
    ]; // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]; // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
    expect(wordCapitilizer(randomNouns1)).toEqual([
      "Streetlamp",
      "Potato",
      "Teeth",
      "Conclusion",
      "Nephew",
    ]);
    expect(wordCapitilizer(randomNouns2)).toEqual([
      "Temperature",
      "Database",
      "Chopsticks",
      "Mango",
    ]);
  });
});

//    ReferenceError: wordCapitilizer is not defined.  Great :-)

//
// b) Create the function that makes the test pass.

const wordCapitilizer = (array) => {
  return array.map((letter) => {
    return letter[0].toUpperCase() + letter.substring(1);
  });
};

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.639 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 2.09s.

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// -------------------Pseudo Code:
// input: a string
// output: the index of the first vowel in the string
// Create a function called vowelFinder
// create an array of vowels
// take the inputted string and turn it into an array of single letters
// use findIndex() to determine the index of the first element that matches a test condition:
  // test condition should determine if the letter is contained in the array of vowels created

// a) Create a test with expect statements for each of the variables provided.

describe("vowelFinder", () => {
  it("returns an array with all the words capitalized", () => {
    const vowelTester1 = "learn"; // Expected output: 1
    const vowelTester2 = "academy"; // Expected output: 0
    const vowelTester3 = "challenges"; // Expected output: 2
    expect(vowelFinder(vowelTester1)).toEqual(1);
    expect(vowelFinder(vowelTester2)).toEqual(0);
    expect(vowelFinder(vowelTester3)).toEqual(2);
  });
});

// ReferenceError: vowelFinder is not defined

// b) Create the function that makes the test pass.

const vowelFinder = (string) => {
  let vowels = ["a", "e", "i", "o", "u"]
  return string.split("").findIndex((letter) =>{
    return vowels.includes(letter)
  })
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.53 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 2.09s.