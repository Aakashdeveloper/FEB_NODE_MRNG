const express = require('express');
const redis = require('redis');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const port = 9800;
const mongourl = "mongodb://localhost:27017";
const col_name = 'books';

const rclient = redis.createClient({
    host:'127.0.0.1',
    port: 6379
})

app.get('/movies',(req,res) => {
    db.collection(col_name).find().toArray((err,result) => {
        if(err) throw err;
        else
            res.setHeader('Access-Control-Allow-Origin','*')
            res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With,Content-Type,Accept')
            res.send(result)
    })
})

app.get('/moviesDetails',(req,res) => {
    var query = {};
    if(req.query.rate1){
        query.rate = req.query.rate
        query = {"rate":parseFloat(query.rate)}
    }else{
        query = req.query;
    }
    
    console.log(query)
    db.collection(col_name).find(query).toArray((err,result) => {
        if(err) throw err;
        else
            res.setHeader('Access-Control-Allow-Origin','*')
            res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With,Content-Type,Accept')
            res.send(result)
    })
})

app.get('/redisin/:id',(req,res) => {
    inputval = req.params.id;
    console.log(inputval)
    rclient.set('userinput',inputval)
})

app.get('/redisout',(req,res) => {
    rclient.get('userinput',(err, data) => {
        if(err) throw err;
        else
            res.send('output is ' + data );
    });
    
})

MongoClient.connect(mongourl,(err,client) => {
    if(err) throw (err);
    db = client.db('acadgild_aug');
    app.listen(port, () => {
        console.log(`running on port ${port}`)
    })
})
