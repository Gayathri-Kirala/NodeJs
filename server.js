var express =require('express')
var app=express();
 const mongoose= require('mongoose')
mongoose.connect('mongodb+srv://Gayathri:gayathri2705@cluster0.izpehmh.mongodb.net/?retryWrites=true&w=majority').then(()=> console.log("connected"))
app.use(express.json());

app.use ("/users",require("./Firsts"))


app.get("/",(req,res)=>{ 
    res.send("hello")
})

app.listen(5000,()=>{
    console.log("Running...")
}) 