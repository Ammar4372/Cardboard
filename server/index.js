const express =  require ("express")
const mongoose =  require ("mongoose")
const cors =  require ("cors")
const UserModel = require ('./Models/CardItems')

const app = express()
app.use(cors()) //sever side to frontend
app.use(express.json()) // conversion


//mongoose connection : 1) local string [update local host with 127.0.0.1]         2) databaseName
mongoose.connect("mongodb://127.0.0.1:27017/Cardboard")


//Get all Items from Data base
app.get('/',(req,res)=>{
    UserModel.find({})
    .then(users=>res.json(users))
    .catch(error=>res.json(error))
})


//Get Single Item
app.get("/cardboard/getItem/:id",(req,res)=>{
    const id = req.params.id
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(error=>res.json(error))
})



//run server
app.listen(3001,()=>{ 
    console.log("server is running")
})