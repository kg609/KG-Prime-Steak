const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const port = process.env.PORT || 5000;
const app = express();

//app.use(express.static(__dirname));
app.use("/", serveStatic ( path.join (__dirname, "/public")))

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/public/index.html"));
});

app.listen(port);
console.log("server started on port " + port); 
