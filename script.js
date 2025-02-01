// Control Flow - If/Else

let number = 20;
 
if (number > 0) {
    console.log('This is a positive number!')
} else if (number < 0) {
    console.log('This is a negative number!')
} else {
    console.log('This number is ZERO!')
}
 
//Control Flow - Switch

var day = '7'

switch (day) {
    case '1':
        console.log('Today is Sunday!')
        break;
    case '2':
        console.log('Today is Monday!')
        break;
    case '3':
        console.log('Today is Tuesday!')
        break;
    case '4':
        console.log('Today is Wednesday!')
        break;
    case '5':
        console.log('Today is Thursday!')
        break;
    case '6':
        console.log('Today is Friday!')
        break;
    case '7':
        console.log('Today is Saturday')
        break;
    default:
        console.log('Uhhhh what day is it???')
}

//Loop - For

for (let i = 1; i <= 5; i++) {
    console.log("Halo " + i);
}
console.log("They should have stopped making Halo games after this one honestly, Halo 5 was terrible.")

//Loop - While

let i = 1;
 
while (i <= 5) { 
    console.log("This number is " + i + ", which isn't 6 yet but its gonna be, watch this");
    i++;
﻿ }
console.log("Wow, this number is " + i + ". I told you we'd get here!")

//Loop - Do-While

let j = 1;

do {
    console.log("What come after " + j + "? Oh yeah I remember now.");
    j++
} while (j < 5);

console.log("I don't wanna count anymore I'm tired")

//Break

for (var k = 1; k <= 7; k++) {
    if (k === 6) {
        break;
    }
    console.log("Let's count up from " + k + " until we reach 7!");
}
console.log("I'm giving up at " + k + " I can't do this anymore")

//Continue

var NFLCmpPct = [70.6, 72.4, 71.4, 70.4, 66.2, 66.7, 67.5, 63, 65.9, 65.9];
for (var k = 0; k < NFLCmpPct.length; k++)  {
    if (NFLCmpPct[k] < 67.5) {
    continue;
    }
    console.log("This quarterback had a " + NFLCmpPct[k] + "% during the 2024-2025 NFL Season");
}

//Scope and Context

let globalVar = "I'm global, you can access me anywhere!";
 
function Testing() {
    let localVar = "I'm local, you can only access me in this function";
    console.log(globalVar);
    console.log(localVar);
}
Testing();