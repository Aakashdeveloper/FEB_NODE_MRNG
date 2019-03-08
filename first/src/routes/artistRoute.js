import express from 'express';
const artistRouter = express.Router();


function router(nav){
    artistRouter.route('/')
    .get((req,res) => {
        res.render('artist',{title:'Artist Page', 
                    menu:nav});
    });


    artistRouter.route('/details')
        .get((req,res) => {
            res.render('details',{title:'Detail Artist', 
                        menu:nav});
    });

    return artistRouter;
}


module.exports = router;
