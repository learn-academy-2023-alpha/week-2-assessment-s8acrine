// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Alpha 2023"
console.log(cohort.split(""))

// a) Your answer: the split method should return an array with each character of the string seperated by the argument, in this case, no seperation, so each character should receive it's own index in this new array. ["A", "l", "p", "h", "a", " ", "2", "0", "2", "3"]
// b) Verify and explain: This worked as expected! Explanation above seems correct

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: "Hello, LEARN Student"
// b) Verify and explain: This returned undefined. I missed the lack of a return on line 19. Gotta keep an eye out for that, especially when bug fixing!

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: This should return [8, 10, 12, 14, 16]
// b) Verify and explain: Returned as expected! multipliedByTwo is set to equal an array, which is then map()'d into a new array which has had each value in the array multiplied by two. This makes the variable multipliedByTwo equivalent to an array. A return here isn't needed as a map function has a return implied making this a very pretty one liner 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: returned as expected. Similar to the above exercise, a nice little one liner. The main difference here being that map will return a new array of the same length as each value gets acted on, while filter() will go through each value and apply a conditional statement, returning a new array only containing values that meet the criteria. In this case, that a remainder would exist after dividing by two. 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "Javascript" 
// b) Verify and explain: IF we can be gracious and ignore my lack of capitalization of the 's' in JavaScript (nobody has to know 😇) this outputted as expected. myCodingSkills is the object, and the .languages will pull the array, with the [0] finally returning the value of the first index, JavaScript! 
//I feel tempted to travel down the rabbithole of how the data is actually interpreted as it goes through all of these different (for lack of better word) operators. 
//As in, is the CPU literally taking myCodingSkills object, then transforming it into the arrary inside the object, then transforming it into the index? 
//Or does the language itself read the entire statement of myCodingSkills.languages[0] without going through all those steps. Just rambling now!
