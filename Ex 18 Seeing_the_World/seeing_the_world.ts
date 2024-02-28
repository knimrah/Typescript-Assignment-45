//Exercise 18 Seeing the World//

let places : string[] = [ 'Global village' ,'Effiel Tower' , 'Taj Mahal' , 'Disney land' , 'Hawksbay beach']

console.log( places) ; //original list

//Print your array in alphabetical order without modifying the actual list.

console.log( 'copy' +  [...places].sort()) ;

//Show that your array is still in its original order by printing it.
console.log( places) ; //original list

//Print your array in reverse alphabetical order without changing the order of the original list.
console.log( 'copy' +  [...places].sort().reverse()) ;
//Show that your array is still in its original order by printing it again.

console.log( places) ; //original list

//Reverse the order of your list. Print the array to show that its order has changed.
console.log( 'copy' +  places.reverse()) ;
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log( 'copy' + places.sort()) ;
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its
// order has changed.
console.log( 'copy' + places.sort().reverse()) ;