import express from 'express';
import database from './database';

const app = express();
const port = 5000;

app.get('/',(req,res) => {
    res.send('<h1>Welcome to node</h1>')
})

app.post('/addData',(req,res) => {
    var mydata = {name:"ram",lang:'node'}
    database.prototype.postData('oonode',mydata);
})

app.get('/getdata',(req,res)=>{
    let out = database.prototype.getData('oonode');
    res.send(out);
})

app.listen(port,(err) => {
    console.log(`server is running on port ${port}`)
})