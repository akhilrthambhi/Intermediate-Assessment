const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://AkhilRThambhi:Akhil542!@cluster0.ol0en.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('connection established');
}).catch(()=>{
    console.log('error in connection');
})