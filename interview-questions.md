# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: When dealing with functions, it is often important to pass data into the function in order to do some sort of logic or operation on. In order to do this, we set up parameters for our function. This creates a variable or placeholder of sorts that we can use inside our function to build out our logic. The argument is the specific VALUE that is input into the function when it is called on. Typical syntax for this would be: const myFunction = (parameter) =>{} to declare the function, then myFunction(argument) to pass that data in.

Researched answer: When creating a function that requires some outside value, you can pass that value into a function using a combination of parameters and arguments. Parameters are set up in the declaration of a function, which create placeholder values that can be used in the coding of the function. When you need to call upon the function and process values, you invoke the function with the argument(s) in the parenthesis directly after the function. A function can be declared with a set amount of arguments, or a function can be built to take any number of arguments by accessing the arguments object inside the function and adding a for loop to handle the arguments input into the function. 

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The .map() method REQUIRES a parameter for the value (this is the current value that the map function is iterating on). It can also, when needed, take in the index and array parameters, if it is needed within your function. One example of this would be if you had an array of items that you wanted to do different things to based on their location within the array. To do this you would create your map() method with the value and index parameters. 

Researched answer: The .map() method uses up to three predefined parameters, value, index, and array. The value parameter is required for operation, while index and array are optional. The value parameter is used to access the current value as you iterate over an array, the index parameter is used to access the current index, and the array parameter is used to access the array as a whole. While the index and array parameters are not often used, they do have edge cases, for example, you may want to perform logic on a value based on it's location within in array (for example, if you had an array of values sorted from least to highest and wanted to increase those numbers based on their relation to each other, you could use the index parameter to access that). If the map() method is used in a function, you may want to use logic to determine if the function should run. For example, if you had a function that used the map() method to apply extra credit to all students who completed at least 5 extra assignments, you could use the array parameter to pass in the array, then use the .length() method to determine if they completed at least 5 assignments. 

3. What is the difference between map and filter?

Your answer: Both .map() and .filter() are used to iterate across an array, their output is the key difference. The map method will perform a function on each value in an array, and return a new array with the return of that function for each index in the array. The filter function will instead use a condition to create a new array that only contains values that meet that condition. An array created from the map method will always be the same length as the array it was called on, while an array created with filter may not be. 

Researched answer: map() and filter() are both built in methods that work with arrays, but have quite a few important differences. The first is that filter() creates a 'shallow copy' of an array, meaning that changes to the original array can create changes in your filtered array. Map creates a NEW array, which can be assigned to a variable and stored for later use. The other major difference is that map is used to perform a specific function on each value in an array to create a new array, while filter is using a condition to create a copy of that array that only includes those values that meet the criteria. 

1. What is iteration?

Your answer: Iteration is the process of performing a specific 'thing' over an over until an end condition is met. This is shown very well with a standard for loop, which starts with the parameters of (starting position, ending position, amount to iterate by)

Researched answer: Iteration is a preprogrammed process in which you set conditions for the behavior of the pattern (where it starts, when it should stop, and by what method should it step) and it then repeats the process across some collection of data. In JavaScript, this is seen in loops, in which you create a function or some method of logic and then apply it to a set of data, such as an array. The iteration can occur on every piece of data, or it can use some method of logic to only act on data that fits a criteria you set. For example, you can create a loop that will iterate through an array, multiplying every odd number by 2.

1. What is the difference between a function and a method?

Your answer: A function is a reusable block of code that you can use multiple times throughout your code. Because you write the code for the function, it can do almost anything you want it to do, limited by your own ability to code. A built in method is a function that is built in to the language itself. This means taht what it does is predefined, and can only sometimes be modified in some way with parameters. This makes functions similar to an adjustable wrench that can be used on a variety of different bolts, where a built in method is more like a 10mm wrench, you can only use it on a 10mm bolt, but it's going to be a better fit and will perform better. 

Researched answer: Functions and methods are both used to perform a set of instructions. The biggest difference between the two is that methods are assosciated with an object, where functions are not. There are also a variety of actions that are so commonly performed by developers, JavaScript developers have added them into the language itself, createing what is called a 'built-in method'. .split() is a built in method that turns a string into an array, includes() is a built in method that acts on an array and returns a boolean statement as to whether or not that array contains a specific value. This makes methods incredibly effecient and smooth to work with. However, there are times when you need to do something that is not assosciated directly with a specific object, but instead needs to act on multiple objects, or even just perform functions such as manipulation of data or outputting data. In this case, you will need to create a function, which will allow you to code in anything that is needed for your specific task. While functions have vast flexibility, truly efficient code will make good use of the many built in methods as much as possible. 

6. STRETCH: What is hoisting in JavaScript?

Your answer: (Based only on my knowledge of the word, this ought to be fun) JavaScript is a fairly well described language, so I would assume that hoisting changes the 'elevation' of an object. Elevation in this sense would refer moving an object from where it is to a different part of the code, for example, if an object such as a function is located deep in your code, you can 'hoist' it upward to use it earlier in your code. This would allow using a function earlier in the code that it is written, but would likely be considered bad practice, as properly ordering your code is more important than relying on hoisting. 

Researched answer:Typically in JavaScript,  Hoisting is a process in which the 'interpreter' (a piece of the browser that runs through the code and interprets it) acts as if the declaration of certain objects to the top of their scope. Effectively, there are certain pieces of code that are 'lifted' to the top of it's scope. This can be understood as the interpreter effectively reading your code as if you had placed hoisted objects at the first line of it's applicable scope. An example of this is the var decleration, it has a global scope and is hoisted, which means even if you have a line of code at the very bottom of your code such as var orange = 'fruit' you could start your code with console.log(orange) would return 'fruit' even though it hadn't been declared yet. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Classes: Classes are a function in JavaScript that contain methods and data that are relevant to multiple objects. They can be thought of as 'blueprints' for the creation of objects. If you wanted to create a piece of code used to store and recall data related to people, you can use a class to predetermine the types of data or functionality you want those objects to have. Using a class, you can set up every new object of the class people to contain the objects name, phoneNumber, and address. You can also add a method to recall this information, such as displayData() {this.console.(log(`My name is ${this.name}`))}

2. Spread operator:The spread operator, ... is used to expand an iterable (an object that can be iterated across, something that contains multiple values with a index or a key) into it's individual values. For example, if you had an array such as [3, 1, 5, 3] you can use the spread operator in a function to add them all together without adding each individual value as an argument:
const: nums =[3, 1, 5, 3]
const sumUp = (x) => {sum(x)} 
console.log(sumUp(...nums))


3. React state: State is a variable that is used in react components that stores data on how a component behaves. Both the initial display as well as methods to change the state as well. Components that have state are considered logic components, while those that don't have state are called display components. Logic components are able to react to user input in some way, while a display component has not functionailty to change. 

4. React props: A prop (short for property) is a react object that is used to pass information from a component to a nested component. Props cannot be changed like states can, they are 'read only' (similar to the idea of a const variable in javascript). Props can also be used to pass an entire method from one component to another. 

5. DOM events: A Document Object Model constantly looks for user input such as clicking, moving their cursor over certain objects, or using their keyboard. These are DOM events. React creates interactability in it's pages by recording DOM events and using them in code logic to make webpages responsive. 
