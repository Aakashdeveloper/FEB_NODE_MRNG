import express from 'express';
const moviesRouter = express.Router();
const mongodb = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

function router(menu) {
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

  moviesRouter.route('/:id')
          .get((req,res) => {
              const {id} = req.params;
              console.log("params form url",id)
              mongodb.connect(url, (err,db) => {
                if(err){
                  throw err;
                }
                const dbo = db.db('acadgild_aug');
                dbo.collection('books').findOne({_id:id}, (err,data) => {
                  if(err) {
                    throw err;
                  }else{
                    console.log('for 1 movies',data);
                    var name = data.name;
                    name = name.charAt(0).toUpperCase()+name.slice(1);
                    res.render('details',{
                                title:name, 
                                menu,
                                details:data});
                  }
                });
            });    
      });

  return moviesRouter;
}


module.exports = router;