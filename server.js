const express=require('express');

const app=express();
app.use(express.static(__dirname));
app.use(express.static(__dirname+"/deletesample"));


app.get("/",(request,response)=>{
    response.sendFile(__dirname + "/deletesample");
    })
    

app.listen(process.env.PORT || 4000, ()=>{
    console.log("hey");
    
    });