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