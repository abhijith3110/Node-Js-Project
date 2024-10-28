import http from "http";
const port = 4000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write("<h1>Home Page</h1><p>This is the Home page</p>");
  } else if (req.url === "/about") {
    res.write("<h1>About</h1><p>This is the about page</p>");
  } else if (req.url === "/service") {
    
    res.write("<h1>Services</h1><p>This is the services Page</p>");
  } else if (req.url === "/contact") {
    res.write("<h1>Contact</h1><p>This is the Contact Page</p>");
  } else {
    res.writeHead(404);
    res.write("<h1>404 Not Found</h1><p>The page you're looking for does not exist.</p>");
  }
  console.log(req.url);
  console.log(req.headers);
  console.log(req.method);
  console.log(res.statusCode);
  res.end();
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
