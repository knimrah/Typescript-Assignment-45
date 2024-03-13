//Exercise 32 Checking Usernames

let current_usernames :string [] = ['Mason', 'JacKson', 'AveRy', 'jaCk' , 'Harper'] ;
let new_Usernsmes : string [] = ['Grayson', 'JacKson' , 'Dean' , 'jaCk' ,'Tanner'] ;

new_Usernsmes.forEach(newUsername => {
    let lowerCase : string = newUsername.toLowerCase();
    if (current_usernames.map (c_users => c_users.toLowerCase()).includes(lowerCase)) {
        console.log ( `The username ${newUsername} is not available. Please enter a different one.`);
    }
    else 
    console.log (`The username ${newUsername} is available`) ;
}
    )