

// // Exercise 1 // 

// // ex.js
// const validator = require('validator');

// // Ex. 1
// const emailToCheck = 'shoobert@dylan';
// console.log(`Ex. 1: ${validator.isEmail(emailToCheck)}`); // Should print false

// // Ex. 2
// const phoneToCheck = '786-329-9958';
// console.log(`Ex. 2: ${validator.isMobilePhone(phoneToCheck, 'en-US')}`); // Should print true

// // Ex. 3
// let blacklist = ["!", "?", ".", "@", "~", ",", "'"];
// let textToClean = "I'M SO EXCITED!!!~!";
// let cleanedText = validator.blacklist(textToClean, blacklist).toLowerCase();
// console.log(`Ex. 3: ${cleanedText}`); // Should print "im so excited"

// =========================================================================================
// =========================================================================================
// =========================================================================================
// =========================================================================================
// =========================================================================================

// Exercise 2  // 

// const faker = require('@faker-js/faker');

// // Exercise 2 - faker
// function makeHuman(number) {
//     for (let i = 0; i < number; i++) {
//         const name = faker.name.findName();
//         const avatar = faker.image.avatar();
//         const company = faker.company.companyName();
//         console.log(`${name}, ${avatar}, ${company}`);
//     }
// }

// // Usage
// makeHuman(2);

