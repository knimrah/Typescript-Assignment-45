"use strict";
//Exercise 3 Store a person name in uppercase, lowercase and titlecase.
let person_Name = 'Nimrah';
console.log("lowercase:", person_Name.toLowerCase());
console.log("lowercase:", person_Name.toUpperCase());
console.log("lowercase:", person_Name.replace(/\bw/g, c => c.toUpperCase()));
