// creating an http server
const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}]

function sumOfNumber(n){
    let ans = 0;
    for(let i = 1; i<=n; i++){
        ans += i;
    }
    return ans;
}

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", function(req, res){
    const n = req.query.n;
    const sum = sumOfNumber(n);
    res.send("hi there, sum is " + sum);
});

app.get("/john", function(req, res){
    // write logic
    const johnKidneys = users[0].kidneys;
    const numberOfKidenys = johnKidneys.length;
    
    let numberOFHealthyKidneys = 0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            numberOFHealthyKidneys = numberOFHealthyKidneys + 1;
        }
    }
    const numberOfUnHealthyKidneys = numberOfKidenys - numberOFHealthyKidneys;
    res.json({
        numberOfKidenys,
        numberOFHealthyKidneys,
        numberOfUnHealthyKidneys
    });
})

app.post("/john", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });

    res.json({
        msg: "Done!"
    });
})

app.put("/", function(req, res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

// removing all the unhealthy kidneys
app.delete("/", function(req, res){
    // you should return a 411
    // only if atleast one unhealthy kidney is there do this, else return 411
    let atleastOneUnhealthyKidney =  false;

    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true
        }
    }
    if(atleastOneUnhealthyKidney){
        const newKidneys = [];
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "done"});
    }else{
        res.status(411).json({
            msg: "You have no bad kidneys"
        })
    }

})


app.listen(3005);