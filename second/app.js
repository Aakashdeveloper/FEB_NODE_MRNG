const http = require('http');

let server = http.createServer((req,res) => {
    res.write("<h1>Welcome to node git</h1>");
    res.end()
})

server.listen(2400);