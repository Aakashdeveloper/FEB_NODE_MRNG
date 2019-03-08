import path from 'path';
import url from 'url';
import util from 'util';
import {fstack} 


let outurl = url.parse('http://ngapi4.herokuapp.com/api/getProducts?name="aa"')
let outurl1 = url.parse('http://localhost:3000/movies')
let myOut = outurl.replace() 
var total = [outurl,outurl1]
for(var i=0;i<total.length;i++){
    console.log(total[i].host)
}



var question  = 'Topic for today is %s and duration is %s hr';
var outtxt = util.format(question, 'Node', 1);
console.log(outtxt)
// console.log(path.dirname('fs.js'))