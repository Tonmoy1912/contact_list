const mongoose=require("mongoose");

const contactSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:true
    }
});

const ContactList=new mongoose.model("contact_lists",contactSchema);

module.exports.ContactList=ContactList;