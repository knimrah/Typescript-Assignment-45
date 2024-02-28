//Exercise 3 Store a person name in uppercase, lowercase and titlecase.

let person_Name : string = 'Nimrah' ;

console.log("lowercase:", person_Name.toLowerCase() ) ;

console.log("Uppercase:", person_Name.toUpperCase() ) ;

console.log("Titlecase:", person_Name.replace(/\bw/g,c => c.toUpperCase()) ) ;  