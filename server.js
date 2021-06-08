const express = require("express");
const path = require("path");

const app = express();

app.get("/", function(_, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
app.use("/public", express.static("./public")); //allowing the access to the libraries here

app.listen(3000);
console.log("Listening on http://localhost:3000");