/*const { json } = require('body-parser')
const bodyParser = require('body-parser')*/


const express=require('express')
const app =express()

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('<h1>Creating a application</h1>')
})

const products =[
    {
        id:1,
        name:"Poco",
    },
    {
        id:2,
        name:"Redme",
    },
    {
        id:3,
        name:"Iphone",
    },
]

app.get('/products',(req,res)=>{
    res.json(products);
})


app.get('/products/:id',(req,res)=>{
    const newData = products.filter(item => item.id.toString() === req.params.id)
    return res.send(newData);
})

app.post('/addproducts',(req,res)=>{
    const{id,name}=req.body;
    console.log(id,name);
    return res.send('Data stored !!');
})


app.listen(4000,()=>{
    console.log("Server is running...");
})