const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url == "/") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Home page");
  } else if (url == "/profile") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Profile page");
  } else {
    res.writeHead(400, { "Content-type": "text/plain" });
    res.end("Url not found");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is now listening to port: ${port}`);
});
