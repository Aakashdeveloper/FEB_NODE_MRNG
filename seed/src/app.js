import express from 'express';
const app = express();
const port = 5000;

app.get('/',(req,res) => {
    res.send('<h1>Welcome to node</h1>')
})

app.listen(port,(err) => {
    console.log(`server is running on port ${port}`)
})