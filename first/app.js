import express from 'express';
const app = express();
const port = '8900';
const moviesRouter = express.Router();
const artistRouter = express.Router();

// Static file path
app.use(express.static(__dirname+'/public'));
// Html or rending Path
app.set('views', './src/views');
// View engine specification
app.set('view engine', 'ejs');

const menu = [
    {link:'/',name:'Home'}, 
    {link:'/movies',name:'Movies'},
    {link:'/artist', name:'Artist'}
]

moviesRouter.route('/')
        .get((req,res) => {
            res.render('movies',{title:'Movies Page', 
                        menu});
});

artistRouter.route('/')
        .get((req,res) => {
            res.render('artist',{title:'Artist Page', 
                        menu});
});

moviesRouter.route('/details')
        .get((req,res) => {
            res.render('details',{title:'Detail Movies', 
                        menu});
});

artistRouter.route('/details')
        .get((req,res) => {
            res.render('details',{title:'Detail Artist', 
                        menu});
});


app.use('/movies',moviesRouter);
app.use('/artist',artistRouter);

app.get('/', (req,res) => {
    res.render('index',{title:"HomePage",
                        menu});
});

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})




/*
app.get('/', (req,res) => {
    res.render('index',{title:"HomePage",
                        menu:navbar});
});

app.get('/movies',(req,res) => {
    res.render('movies',{title:'Movies Page', 
                        menu:navbar});
});

*/