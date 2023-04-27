const express=require("express");
const port=8000;
const path=require("path");


const db=require("./config/mongoose");
const collection=require("./config/collection");

const app=express();

app.use(express.urlencoded());
app.use(express.static("assets"));

// var contactList=[
//     {
//         name:"tonmoy biswas",
//         phone:"7063658215"
//     },
//     {
//         name:"subham dey",
//         phone:"9890483092"
//     },
//     {
//         name:"Binoy sikdar",
//         phone:"9873984729"
//     }
// ];

// for (let i in contactList){
//     console.log("Name : "+contactList[i].name+" Phone : "+contactList[i].phone);
// }

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get("/",function(req,res){
    //res.writeHead(200,{"content-type":"text/html"});
    // res.send("<h1>Cool! The server is running</h1>");
    res.render("home",{title:"I am flying"});
});

app.get("/contact",function(req,res){

    const func= async ()=>{
        const result=await collection.ContactList.find();
        res.render("practice",{
            title:"Contact list",
            contact_list:result
        })
    }

    func();

    // res.render("practice",{
    //     title:"Contact list",
    //     contact_list:
    // })
});

app.post("/create-contact",function(req,res){
    // console.log(req.body);
    //contactList.push(req.body);

    const func =async ()=>{
        const ContactList=collection.ContactList;
        const doc=new ContactList({
            name:req.body.name,
            phone:req.body.phone
        })
        await doc.save();
        res.redirect("back");
    }


    func();

    // const ContactList=collection.ContactList;
    // const doc=new ContactList({
    //     name:req.body.name,
    //     phone:req.body.phone
    // })
    // doc.save();
    // res.redirect("back");
});


app.get("/delete-contact",function(req,res){
    // var contact=req.query;
    // // console.log(contact);
    // var i=0;
    // while(contactList[i].phone!=contact.phone){
    //     i++;
    // }
    // contactList.splice(i,1);
    // console.log(i);

    const func=async ()=>{
        const ContactList=collection.ContactList;
        const id=req.query.id;
        await ContactList.findByIdAndRemove(id);
        res.redirect("back");
    }

    func();

    // res.redirect("back");
});




app.listen(port,function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("The server is running on port :",port);
    }
});