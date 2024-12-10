const mongoose = require("mongoose");

// const mongoURL = "'mongodb://localhost:27017/"; // Replace 'myDatabase' with your database name
// mongoose.connect('mongodb://localhost:27017/mydatabase');
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');




const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongodb server');
    
})
db.on('error',()=>{
    console.log('MongoDB connection error');
    
})

db.on('disconnected',()=>{
    console.log('MongoDB Disconnected');
    
})


module.exports = db;
