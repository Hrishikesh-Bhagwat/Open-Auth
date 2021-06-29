const express=require('express')
const cors=require('cors')
const app=express()

const PORT=3000;

app.use(express.json())
app.use(cors())
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