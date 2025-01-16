const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const dotenv=require("dotenv")
const mongoose=require("mongoose")

app.use(bodyParser.json())
app.use(cors())
dotenv.config()

app.get("/",(req,res)=>{
    res.send("Welcome Node")
})

app.listen(4000,()=>{
    console.log("5000 portda din");
})

mongoose.connect("mongodb+srv://nicatmmab205:nijat205@af206.i3y14.mongodb.net/")
.then(()=>{
    console.log("connect");
})

let ProductSchema=new mongoose.Schema({
    name:String,
    title:String,
    price:Number,
    image:String
})

let ProductModel=mongoose.model("/items",ProductSchema)

app.get("/items", async (req,res)=>{
    let items=await ProductModel.find()
    res.send(items)
})

app.get("/items/:id",async (req,res)=>{
    let id= req.params.id
    let myItems= await ProductModel.findById(id)
    res.send({
        message:"Success",
        data:myItems
    })
})

app.delete("/items/:id", async (req,res)=>{
    let id=req.params.id
    await ProductModel.findByIdAndDelete(id)
    res.send({
        message:"Success Delete"
    })
})

app.post("/items", async (req,res)=>{
    let newItems=ProductModel(req.body)
    await newItems.save()
    res.send({
        message:"Success Post",
        data:req.body
    })
})

app.put("/items/:id", async(req,res)=>{
    let id=req.params.id
    let updateItem=req.body
    let updatedItem= await ProductModel.findByIdAndUpdate({_id:id},updateItem,{new:true})
    res.send({
        message:"Success Post",
        data:updatedItem
    })
})

