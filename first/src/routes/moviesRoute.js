import express from 'express';
const moviesRouter = express.Router();
const mongodb = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

function router(menu){
  moviesRouter.route('/')
  .get((req,res) => {
      mongodb.connect(url, (err,db) => {
        if(err){
          throw err;
        }
        const dbo = db.db('acadgild_aug');
        dbo.collection('books').find({}).toArray(
          (err,data) => {
            if(err) {
              throw err;
            }else{
              res.render('movies',{
                          title:'Movies Page', 
                          menu, 
                          movies:data});
            }
          }
        );
      });
      
  });

  moviesRouter.route('/details')
          .get((req,res) => {
              res.render('details',{title:'Detail Movies', 
                          menu});
  });

  return moviesRouter;
}


module.exports = router;