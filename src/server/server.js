var express = require("express");
var path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

var app = express(); // Intace of express

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const routLogin = require("./Router/routLogin");

app.use("/", routLogin);

app.listen(3001, () => {
  console.log("Listening on port");
});
