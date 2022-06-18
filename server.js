

const express = require("express");
const os = require("os");
const path = require("path");
const app = express();
const port = 1234;

app.use(express.json());
//app.use(express.urlencoded({extended: false}));



app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.use("/api/poems", require("./api/poems.js"));


app.listen(port, () => console.log(`Server listening a port ${port}!`));


app.get("/recipe/:food", (req, res) =>{
  res.json({name: req.params.food, instructions: ['a'], ingredients: ['b']});
//   console.log(req.params.food);
})


/*

const http = require("http");

console.log("Server running... fully!")

http.createServer(function(req,res) {
    console.log(req);
    res.write("Hello World!!");
    res.end();
    console.log("Browser reached us!")
}).listen(8000);*/