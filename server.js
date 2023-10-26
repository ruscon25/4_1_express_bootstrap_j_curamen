const express = require("express");
const dotenv = require("dotenv").config;
const app = express();
const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`);
})