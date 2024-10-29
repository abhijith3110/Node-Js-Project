import http from "http";
import { URL } from "url";
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT ||   5000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/") {
    res.write("<h1>Home Page</h1><p>This is the Home page</p>");
  } else if (url.pathname.startsWith("/about")) {
    const id = url.pathname.split("/")[2];
    const name = url.searchParams.get("name")
    res.write(
      `<h1>About</h1><p>This is the about page for ID No. ${
        id ? id : "NOT GETTING ID"
      }</p>
      <p>This is the about page for. ${
        name ? name.toUpperCase() : "NOT GETTING name"
      }</p>`
    );
  } else if (url.pathname === "/service") {
    res.write("<h1>Services</h1><p>This is the services Page</p>");
  } else if (url.pathname.startsWith("/contact")) {
    const name = url.searchParams.get("name");
    res.write(
      `<h1>Contact</h1><p>This is the Contact Page of ${
        name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "USER NOT FOUND"
      }</p>`
    );
  } else {
    res.writeHead(404);
    res.write(
      "<h1>404 Not Found</h1><p>The page you're looking for does not exist.</p>"
    );
  }
  // console.log(req.url);
  // console.log(req.headers);
  // console.log(req.method);
  // console.log(res.statusCode);
  res.end();
});




server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
