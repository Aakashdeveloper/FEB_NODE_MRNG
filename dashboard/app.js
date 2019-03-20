import express from 'express';
const port = 3300;
const app = express();

app.get('/', (req,res)=>{
    res.send("h")
})

app.listen(port, (err)=> {
    console.log(`server on port ${port}`)
})