const express = require("express");


const app = express();
var PORT = 3000;
app.use(express.json());
const blogModel=require('../Intermediate assessment 2/model');
require('./connection')

//Write missing code here and all the CRUD operations on the database

const router=express.Router();
app.use('/blog',router);

// GET

router.get('/get',async(req,res)=>{
  try{
      const data=await blogModel.find();
      res.send(data);
  }catch{error}{
      res.status(404).send("Data not Found")
}})


// POST

router.post('/post',async(req,res)=>{
  try{
      var item=req.body;
      const data1=new blogModel(item);
      const saveddata=await data1.save();
      res.status(200).send('Post Successful');
  }catch{error}{
      res.status(404).send("Post Unsuccessful")
}})

router.put('/put/:id',async(req,res)=>{
  try{
      const id=req.params.id;
      const data=await blogModel.findByIdAndUpdate(id,req.body)
      res.status(200).send('Update Successful');
  }catch{error}{
      res.status(404).send("Update Unsuccessful")
}})

// DELETE

router.delete('/del/:id',async(req,res)=>{
  try{
      const id=req.params.id;
      const data=await blogModel.findByIdAndDelete(id)
      res.status(200).send('Delete Successful');
  }catch{error}{
      res.status(404).send("Delete Unsuccessful")
}})



// module.exports=router


app.listen(3000, () => {
  console.log(`${PORT} is up and running`);
});
