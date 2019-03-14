import express from 'express';
import chalk from 'chalk';
import morgan from 'morgan';
const app = express();
const port = '8900';

// Es5 
// const moviesRouter = require('./src/routes/moviesRoute');
// Es6
// import moviesRouter from './src/routes/moviesRoute';
// import artistRouter from './src/routes/artistRoute';
const menu = [
    {link:'/',name:'Home'}, 
    {link:'/movies',name:'Movies'},
    {link:'/artist', name:'Artist'}
]

const moviesRouter = require('./src/routes/moviesRoute')(menu);
const artistRouter = require('./src/routes/artistRoute')(menu);
app.use(morgan('tiny'));
// Static file path
app.use(express.static(__dirname+'/public'));
// Html or rending Path
app.set('views', './src/views');
// View engine specification
app.set('view engine', 'ejs');


app.use('/movies',moviesRouter);
app.use('/artist',artistRouter);

app.get('/', (req,res) => {
    res.render('index',{title:"HomePage",
                        menu});
});

debugger;
app.listen(port, ()=> {
    console.log(`${chalk.gray(`Server is running on port ${port}`)}`);
})