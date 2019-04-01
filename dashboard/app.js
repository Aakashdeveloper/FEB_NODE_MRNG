import express from 'express';
//import mongodb from 'mongodb';
const MongoClient = require('mongodb').MongoClient;
import bodyParser from 'body-parser';
const port = 3300;
const app = express();
let db;
const mongourl = 'mongodb://127.0.0.1:27017/'
const col_name = 'userlist';

app.use(express.static(__dirname+'/public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './views');


app.post('/addData', (req,res) => {
    db.collection(col_name)
        .insert(req.body, (err,result) => {
            if(err) throw err;
            console.log('data.inserted');
        })
    res.redirect('/');
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

app.put('/update_user',(req,res)=>{
    db.collection(col_name)
        .findOneAndUpdate({"name":req.body.name},{
            $set:{
                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone
            }
        },{
            upsert:true
        },(err,result) => {
            if(err) return res.send(err);
            res.send(result)
        })
})

app.delete('/delete_user',(req,res) => {
    db.collection(col_name).findOneAndDelete({
        "name":req.body.name
    },(err,result) => {
        if (err) return res.send(500,err)
        res.send({message: 'success'})
    })
})

app.get('/', (req,res)=>{
    db.collection(col_name).find().toArray((err,result) => {
        if(err) throw err;
        var outupt = result;
        console.log(outupt)
        res.render('index.ejs',{data:result})
    })
})

app.get('/new',(req,res) => {
    res.render('admin')
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
