// Can JS delegate ?

// Until now, we've only seen synchronous functions

function findSum(n){
    let ans = 0;
    for(let i=0;i<n;i++){
        ans += i;
    }
    return ans;
}

function findSummTill100(){
    console.log(findSum(100));
}

// busy waiting, one of of sync sleep the thread

function syncSleep(){
    let a = 1;
    for(let i=0;i<1000000000;i++){
        a++;
    }
}

// syncSleep();
// findSummTill100();
setTimeout(findSummTill100, 1000); // calling an async function, I'll let you know after 1 second
console.log("hello world");
