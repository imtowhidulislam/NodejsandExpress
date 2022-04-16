const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log("we now at home page");
  }
  if (req.url === "/about") {
    console.log("we now at about page");
  }
  if (req.url === "/blog") {
    console.log("we now at blog page");
  } else {
    res.write("Page doesn't found");
    res.end();
  }
});

server.listen(3000, (req, res) => {
  console.log(`The server is listening at port : 3000`);
});
