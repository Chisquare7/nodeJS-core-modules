const http = require('http');
const portServer = 8080;

const mainServer = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World");
    res.end();
});

mainServer.listen(portServer, () => {
    console.log(`Main Server runs at http://localhost:${portServer}`);
})