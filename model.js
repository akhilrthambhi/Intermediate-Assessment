const mongoose=require("mongoose");
const schema = mongoose.Schema({
    BlogTitle:String,
    BlogAuthor:String,
    BlogContent:String,
    BlogComments:Number
});

const blogData=mongoose.model('blogdetail',schema);
module.exports=blogData;

