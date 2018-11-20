

const express = require("express");
//const serveStatic = require("serve-static");
const path = require("path");
const port = process.env.PORT || 5000;
const app = express();

app.use(express.static(__dirname));
//app.use("/", servestatic ( path.join (__dirname, "/public")))

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(port);
console.log("server started on port " + port); 
