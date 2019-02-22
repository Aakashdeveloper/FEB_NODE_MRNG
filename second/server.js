const http = require('http');

let server = http.createServer((req,res) => {
    res.write("<h1>Hii to node</h1>");
    res.ed()
})

server.listen(2300);


//req when you will get something on server
//res when you send back from server