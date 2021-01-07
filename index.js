// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeed = 17500;
let marsDistance = 225000000;
let moonDistance = 384400;
let milesPerKm = 0.621;

// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof 'shuttleName');
console.log(typeof shuttleSpeed);
console.log(typeof marsDistance);
console.log(typeof moonDistance);
console.log(typeof milesPerKm);
// Code your solution to exercises 3 and 4 here:
let milesToMars = (marsDistance * milesPerKm);
let hours = (milesToMars / shuttleSpeed);
let daysToMars = (hours / 24);

console.log(`${shuttleName} will take ${daysToMars} days to reach Mars.`);

// Code your solution to exercise 5 here:
let milesToMoon = (moonDistance * milesPerKm);
let moonHours = (milesToMoon / shuttleSpeed);
let daysToMoon = (moonHours / 24);

console.log(`${shuttleName} will take ${daysToMoon} days to reach the Moon.`);
