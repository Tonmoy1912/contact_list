const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/constact_list_db')
.then(()=>{
    console.log("Successfully connected to database");
})
.catch((err)=>{
    console.log(err);
});

// const db=mongoose.connection;

// db.on('error',function(){
//     console.log("error on connecting to database");
// })

// db.once('open',function(){
//     console.log("successfully connected to database");
// })