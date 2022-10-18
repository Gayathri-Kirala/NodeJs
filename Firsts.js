const express =require('express')
const Router=express.Router()
 const firsts = require("./model")

 Router.post('/createusers',async(req,res)=>{
    try{
        const data = await firsts.create({
            ...req.body
        })
        res.status(200).json({message:"Users creation is successful."})
    }
    catch(err){
        res.status(400).json({message:"Users creation has been failed."})
    }

 })

 Router.get('/getusers',async(req,res)=>{
    try{
        const data = await firsts.find()
        res.status(200).json(data)
    }
    catch(err){
        res.status(400).json({message:"Get users is failed."})
    }
 })

 Router.delete('/deleteusers/:_id',async (req,res)=>{
    try{
        const data = await Deleteone({_id:req.params._id})
        res.status(200).json({message:"Deleted successfully."})
    }
    catch(err){
        res.status(400).json({message:"Could not delete the user."})
    }

 })

 Router.put('/updateusers',async(req,res)=>{
    try{
        const updateusers= await firsts.updateone({_id:req.params._id},{$set:req.body})
        res.status(200).json({message:"Updated successfully."})
    }
    catch{
        res.status(400).json({message:"Update failed."})
    }
 })

module.exports=Router
