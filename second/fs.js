import fs from 'fs';
import express from 'express';
const app = express();
const port = '6789';
app.get('/', (req,res) => {
    //res.send({name:'aa'});
    fs.readFile('myText.txt','utf-8',(err,data) => {
        fs.fstat();
        if(err) throw err;
        res.send(data)
    })
    
})

app.get('/products',(req,res) => {
    fs.readFile('db.json',(err,data) => {
        if(err) throw err;
        res.send(JSON.parse(data));
    })
})

app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`Server is running on port ${port}`);
})

/*
var name = "prnav\n"

if(name !== "aakash\n" &&  name !== "prnav\n"){
    fs.appendFile('myText.txt', name, (err)=> {
        if(err) throw err;
        console.log('Added to file');
    })
}else {
    fs.appendFile('name.txt', name, (err)=> {
        if(err) throw err;
        console.log('Added to file');
    })
}*/
/*fs.unlink('name.txt',(err)=>{
    if(err) throw err;
    console.log('delete')
})*/
