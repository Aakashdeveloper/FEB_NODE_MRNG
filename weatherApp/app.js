const express = require('express');
const app = express();
const request = require('request');
const port = 5400;

const url = "http://api.openweathermap.org/data/2.5/forecast/daily?id=5308655&appid=fbf712a5a83d7305c3cda4ca8fe7ef29&cnt=10";
const url1 ="https://api.nasa.gov/planetary/apod?api_key=ri0EZkle2DPanZWtyS8oZFgC4coub86CDtV5OiYV&date=2019-02-02";
// Static file path
app.use(express.static(__dirname+'/public'));
// Html or rending Path
app.set('views', './src/views');
// View engine specification
app.set('view engine', 'ejs');


app.get('/',(req,res) => {
    request(url, (err,response,body) =>{
        if(err){
            console.log(err);
        } else {
           
            const output = JSON.parse(body);
            res.render('main',{output,title:'***Weather App***'});
        }
    });
});

app.listen(port, () => {
    console.log(`server running on ${port}`);
});




/*
~
var a = 10
var b = "my age is "+a
var b = `my age is ${a}`
https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo&date=2019-02-02
https://github.com/Aakashdeveloper/public-apis
*/