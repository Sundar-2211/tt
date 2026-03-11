const express = require("express");
const fs = require("fs");

const app = express();

// Updated path
const filePath = "D:/MES-IP Monitoring/Trial Ping/25PC.txt";

app.use(express.static("public"));

app.get("/pingdata", (req, res) => {

fs.readFile(filePath, "utf8", (err, data) => {

if (err) {
return res.json({ time: 0 });
}

let lines = data.trim().split("\n");

let lastLine = lines[lines.length - 1];

let match = lastLine.match(/time[=<](\d+)/);

let time = match ? parseInt(match[1]) : 0;

res.json({ time: time });

});

});

app.listen(3000, () => {

console.log("Server running at http://localhost:3000");

});