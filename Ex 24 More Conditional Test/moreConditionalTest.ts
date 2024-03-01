//Exercise 24 More Conditional Test//

//Test 01 String Equality Test
console.log('Equality test with strings :', 'Mountain' === 'Mountain') ;

//Test 02 Inequality Test
console.log('Inequality test with strings :', ('Valley' as string)!= 'Mountain') ;

//Test 03 Lower case function Test
console.log('Lower case function:' , 'RIVER'.toLowerCase() === 'river');

//Test 04 Number Equality Test
console.log('Equality test with number :', 5 === 5) ;

//Test 05  Number Inequality Test
console.log('Inequality test with number :', ( 35 as number)!= 25) ;

//Test 06 greater than 
console.log('Greater than test:', 14 > 6);

//Test 07 less than
console.log('less than test:', 4 < 6);

// Test 08 greater than or equal to
console.log('Greater than or qual to test:', 18 >= 18); 

//Test 09 less than or equal to
console.log('less than or equal to test', 7 <= 15);

//Test 10 using and operator
console.log('And operator test:' , 9===9 && 13> 6) ;

//Test 11 using or operator
console.log('Or operator test:' , 6===6 || 13> 0) ;

//Test 12 Item is present in array

let brands : string[]= ['khaddi' , 'Alkaram' ,'Gul Ahmed' , 'Ethnics'] ;
console.log('Test "Gul Ahmed" in the array:' , brands.includes("Gul Ahmed") ) ;

//let 13 Item is present not in array

console.log('Testing "Diners" is not in array:',!brands.includes('Diners') ) ;