import express from 'express';
const app = express();
const port = '8900';

// Static file path
app.use(express.static(__dirname+'/public'));
// Html or rending Path
app.set('views', './src/views');
// View engine specification
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index',{title:"HomePage",
                        menu:[{link:'/',name:'Home'}, 
                               {link:'/movies',name:'Movies'},
                            {link:'/', name:'Contact'}]});
})

app.get('/movies',(req,res) => {
    res.render('movies',{title:'Movies Page', 
                        menu:[{link:'/',name:'Home'}, 
                              {link:'/movies',name:'Movies'},
                             {link:'/', name:'Contact'}]});
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})