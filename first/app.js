import express from 'express';
const app = express();
const port = '8900';

app.get('/', (req,res) => {
    res.send('<h1>Running With Express</h1>');
})

app.get('/about',(req,res) => {
    res.send('<h1>This is about page</h1>')
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})