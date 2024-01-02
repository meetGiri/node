const url = require("url");
const http = require("http");
const fs = require("fs");
const port = 3000

http.createServer((req, res) => {

    const path = req.url;

    if (path == "/home") {
        console.log('Home page.');

        res.writeHead(200, {
            "content-type": "text/html",
        });
        const filecontent = fs.readFileSync("home.html")
        res.write(filecontent)
        res.end();

    }
    else if (path == "/about") {
        console.log('About page.');

        res.writeHead(200, {
            "content-type": "text/html",
        });
        const filecontent = fs.readFileSync("about.html")
        res.write(filecontent)
        res.end();

    }

    else if (path == "/blog") {
        console.log('blog page.');

        res.writeHead(200, {
            "content-type": "text/html",
        });
        const filecontent = fs.readFileSync("blog.html")
        res.write(filecontent)
        res.end();


    }
    else if (path == "/portfolio") {
        console.log('Portfolio page.');

        res.writeHead(200, {
            "content-type": "text/html",
        });
        const filecontent = fs.readFileSync("portfolio.html")
        res.write(filecontent)
        res.end();


    }
    else if (path == "/contact") {
        console.log('Contact page.');

        res.writeHead(200, {
            "content-type": "text/html",
        });
        const filecontent = fs.readFileSync("contact.html")
        res.write(filecontent)
        res.end();


    }
    else {
        console.log('Home page.');

        res.writeHead(200, {
            "content-type": "text/html",
        });
        const filecontent = fs.readFileSync("home.html")
        res.write(filecontent)
        res.end();
    }

}).listen(port, () => console.log(`Example app listening at http://127.0.0.1:${port}`))