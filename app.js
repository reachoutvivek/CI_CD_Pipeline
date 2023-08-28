const express=require('express')
const app=express()

app.get('/names',(req,res)=>{
    res.send('Telmo');
})
app.get('/info',(req,res)=>{
    res.send('Hello')
})
app.listen(5000,()=>{
    console.log("Server running on port 5000")
})