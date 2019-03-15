import express from 'express';
const moviesRouter = express.Router();
const mongodb = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const dbName = 'acadgild_aug';
import 'babel-polyfill';

function router(menu) {
  moviesRouter.route('/')
  .get((req,res) => {
     (async function mongo(){
       let client;
       try{
         client = await mongodb.connect(url);
         const db = client.db(dbName);
         const col = await db.collection('books');
         const movies = await col.find().toArray();
          res.render('movies',{
            title:'Movies Page', 
            menu, 
            movies:movies});
        }
       catch(err){
         console.log(err);
       }
       client.close();
     }());
      
  });

  moviesRouter.route('/:id')
          .get((req,res) => {
              const {id} = req.params;
          (async function mongo(){
            let client;
            try{
              client = await mongodb.connect(url);
              const db = client.db(dbName);
              const col = await db.collection('books');
              const details = await col.findOne({_id:id})
              res.render('details',{
                title:details.name, 
                menu,
                details});
            }
            catch(err){
              console.log(err);
            }
            client.close();
          }());
                
      });

  return moviesRouter;
}


module.exports = router;


