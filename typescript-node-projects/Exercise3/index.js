"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "faraz ul hussnain";
// step 1 show in lowercase name
//1st Method
console.log(personName.toLowerCase());
//2nd Method
let lowercaseName = personName.toLowerCase();
console.log(lowercaseName);
// upercase Name
console.log(personName.toUpperCase());
let upercaseName = personName.toUpperCase();
console.log(upercaseName);
// title case Name
// first convert it in array
let words = personName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titlecaseName);
// Method 1 using a function
function toTitleCase(input) {
    return input.toLowerCase().replace(/(?:^|\s)\w/g, match => match.toUpperCase());
}
const originalString = "faraz ul hussnain";
const titleCaseString = toTitleCase(originalString);
console.log(titleCaseString);
// Method 2 using array and map
// function toTitleCase(input: string): string {
//     const words = input.toLowerCase().split(' ');
//     const titleCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//     return titleCaseWords.join(' ');
// }
// const originalString = "faraz ul hussnain";
// const titleCaseString = toTitleCase(originalString);
// console.log(titleCaseString);
// Method 3 using regular expression and replace function
// function toTitleCase(input: string): string {
//     return input.replace(/\w\S*/g, match => match.charAt(0).toUpperCase() + match.slice(1).toLowerCase());
// }
// const originalString = "faraz ul hussnain";
// const titleCaseString = toTitleCase(originalString);
// console.log(titleCaseString);
// using for loop in function 
// function toTitleCase(input: string): string {
//     const words = input.toLowerCase().split(' ');
//     for (let i = 0; i < words.length; i++) {
//         // Capitalize the first letter of each word
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(' ');
// }
// const originalString = "faraz ul hussnain";
// const titleCaseString = toTitleCase(originalString);
// console.log(titleCaseString);
// for loop
// const originalString = "faraz ul hussnain";
// const words = originalString.toLowerCase().split(' ');
// for (let i = 0; i < words.length; i++) {
//     // Capitalize the first letter of each word
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// }
// const titleCaseString = words.join(' ');
// console.log(titleCaseString);
