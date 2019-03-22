import express from 'express';
//import mongodb from 'mongodb';
const MongoClient = require('mongodb').MongoClient;
import bodyParser from 'body-parser';
const port = 3300;
const app = express();
let db;
const mongourl = 'mongodb://127.0.0.1:27017/'
const col_name = 'userlist';

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.post('/addData', (req,res) => {
    db.collection(col_name)
        .insert(req.body, (err,result) => {
            if(err) throw err;
            console.log('data.inserted');
        })
})

app.post('/find_by_name',(req,res) => {
    let name = req.body.name;
    db.collection(col_name)
      .find({name:name})
      .toArray((err,result) => {
          if(err) throw err;
          res.send(result)
      })
})

app.get('/', (req,res)=>{
    db.collection(col_name).find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

/*app.listen(port, (err)=> {
    console.log(`server on port ${port}`)
})*/
MongoClient.connect(mongourl,(err,client) => {
    if(err) throw err;
    db = client.db('march_dashboard')
    app.listen(port, ()=> {
        console.log(`Server running on port ${port}`)
    })
})

/*{name:"john",email:'j@j.com',phone:1234}*/
