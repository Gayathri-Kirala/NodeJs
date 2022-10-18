const express =require('express');
const app= express();


app.get('/',(req,res)=>{
    res.send("<h3>Hello World</h3>")

})

app.listen(4000,()=>{
    console.log('server is running....')
})

//get takes2 arguments 1:router(url that we need to move. eg:/ (refers to homepage), 2.functionality)
//when we enter the router in the url then the server moves to the functionality that is present in the second argument.