const express=require('express')

const app=express()

const PORT=3000;

app.use(express.json())

app.get("/device-status",function(req,res){
    return res.sendStatus(200);
})

app.listen(PORT,function(err){
    if(!err){
        console.log(`The server is running on port ${PORT}`)
    }
    else{
        console.log(err)
    }
})