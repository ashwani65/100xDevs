const fs = require('fs');

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})

console.log('hi there');

let a = 0;
// takes very long, longer than the file read
for(let i=0;i<10000000;i++){
    a++;
}

console.log('hi there');

/**
 * What are common async funcitons ?
 *  setTimeout
 * fs.readFile - to read a file from your filesystem
 * Fetch - to fetch some data from an API endpoint
 */

// http://latentflip.com/loupe, visit this to look at the async arch, run below example
// Callback Queue -> when js thread becomes free then it can pull it back in call Stack... with help of this JS is able to parellazie the task

// boiling water
console.log('hi there');

// delegate task to Kamla didi
setTimeout(function timeout(){
    console.log('Click the buttons');
}, 5000);

// delegate task to Bablu
setTimeout(function timeout(){
    console.log('Click the buttons');
}, 10000);

// cutting the vegitables
let b = 0;
for(let i = 0;i<10;i++){
    b = b + 1;
}
console.log(b);

