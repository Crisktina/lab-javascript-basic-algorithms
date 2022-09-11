// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".

let hacker1 = "Nick";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "GPS";
console.log(`The navigator's name is ${hacker1}`);

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
    console.log(
        `The driver has the longest name, it has ${hacker1.length} characters`
    );
} else if (hacker2.length > hacker1.length) {
    console.log(
        `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
    );
} else {
    console.log(
        `Wow, you both have equally long names, ${hacker2.length} characters!`
    );
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let result = "";

for (let index = 0; index < hacker1.length; index++) {
    result += hacker1.charAt(index) + " ";
}

console.log(result.toUpperCase());

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let result2 = "";
// forma 1 de hacer-----------------------------

// for (let index = 0; index < hacker2.length; index++) {
//     result2 += hacker2.charAt(index);
// }

// let convertirEnString = result2.split("");
// let stringReverse = convertirEnString.reverse();
// let unirArray = stringReverse.join("");

// console.log(unirArray);

// forma 2 de hacer -----------------------------
for (let index = hacker2.length - 1; index >= 0; index--) {
    result2 += hacker2.charAt(index);
}
console.log(result2);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`The driver's name goes first.`);
} else if (hacker2 === hacker1) {
    console.log(`What?! You both have the same name?`);
} else {
    console.log(`Yo, the navigator goes first definitely.`);
}

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:

// Generate 3 paragraphs. Store the text in a variable type of string.

let paragraphLorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." +
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." +
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";

// Make your program count the number of words in the string.
let separatedWordsLorem = paragraphLorem.split(" ");
console.log(separatedWordsLorem);

// Make your program count the number of times the Latin word et appears.

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 😃