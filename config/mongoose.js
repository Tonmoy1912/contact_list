const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/constact_list_db');

const db=mongoose.connection;

db.on('error',function(){
    console.log("error on connecting to database");
})

db.once('open',function(){
    console.log("successfully connected to database");
})