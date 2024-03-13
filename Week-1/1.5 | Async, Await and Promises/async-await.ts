// Again, just syntacic sugar, sitll uses callbacks/promises under the hood

// Normal syntax
function ashwani(){
    var p = new Promise(function(resolve){
        resolve("promise foo");
    });
    return p
}

function main(){
    ashwani().then(function(value){
        console.log(value);
    })
}
// main();


// Async await
function ashwaniAAW(){
    var p = new Promise(function(resolve){
        // do some async logic here
        setTimeout(function(){
            resolve("await foo");
        }, 3000)
    });
    return p
}

// Any function that wants to use await, needs to be async
async function mainAAW(){
    // no callbacks, no .then syntax
    const value = await ashwaniAAW();
    console.log('hi there 1');
    console.log(value);
}
mainAAW();
console.log('after main');