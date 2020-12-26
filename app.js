const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.get('/user',(req,res)=>{
    const data= req.body;
    console.log(data);
     res.json({name:req.query.name,message:"Hello"});
 })
app.get('/user',(req,res)=>{
   const data= req.body;
   console.log(data);
    res.json({name:data.name,message:"Hello"});
})

app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});

