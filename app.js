const path = require('path')
const express = require('express')
const app = express()
const dirName = path.join(__dirname + '/index.html')
const bodyParser = require('body-parser')

app.use(bodyParser.json());       
app.use(bodyParser.urlencoded({ extended: false })); 
app.get('/',(req,res)=>{
    res.sendFile(dirName);
    
})

app.post("/", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // username=== "Admin" ?  res.redirect('/success') :res.redirect('/failure')
    // password === "admin123" ? res.redirect('/success') :res.redirect('/failure')
    if(username=== "Admin" && password === "admin123"){
        res.redirect('/success')
    }
    else res.redirect('/failure')

  });

app.get('/failure', function (req, res) {
    res.send("Incorrect username or password");
});

app.get('/success', function (req, res) {
    res.send("Success");
});

app.get('/verify', function (req, res) {
    res.redirect('/');
    
});

app.listen(3000)