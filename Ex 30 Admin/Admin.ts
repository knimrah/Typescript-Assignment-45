//Exercise 30 Hello Admin//

const userNames : String [] = ['Admin' , 'Alex' , 'Mario' , 'William' , 'Henry'] ;

userNames.forEach( userName => {
    if (userName === 'Admin') 
    console.log ('Hello admin, would you like to see a status report?');

else console.log(`Hello ${userName}, thank you for logging in again.
`)

}) 