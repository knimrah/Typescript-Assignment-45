"use strict";
//Exercise 37 Large Shirt
// Modify the make_shirt() function so that shirts are large by default, with a message that reads
// I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any
// size with a different message.
function make_shirt(size = "large", message = "I love Typescript.") {
    console.log(`make ${size} shirt with a message ${message}`);
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'Think outside the box.');
