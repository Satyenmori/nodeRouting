const http = require("http");
const fs = require("fs");
const path = require("path");
const { isUtf8 } = require("buffer");
const { error } = require("console");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), "utf-8", (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  }else if (req.url==="/about")
  {
    fs.readFile(path.join(__dirname, "about.html"), "utf-8", (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  }else{
    res.end("<h1>404 Page not plz enter valid page name </h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("http://localhost:8000");
});
