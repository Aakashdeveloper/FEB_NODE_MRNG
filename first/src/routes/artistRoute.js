import express from 'express';
const artistRouter = express.Router();

const menu = [
    {link:'/',name:'Home'}, 
    {link:'/movies',name:'Movies'},
    {link:'/artist', name:'Artist'}
]



artistRouter.route('/')
        .get((req,res) => {
            res.render('artist',{title:'Artist Page', 
                        menu});
});


artistRouter.route('/details')
        .get((req,res) => {
            res.render('details',{title:'Detail Artist', 
                        menu});
});

module.exports = artistRouter;
