const express=require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');





mongoose.connect("mongodb://localhost:27017/classes").then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log(err);
});


const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
});



const User=mongoose.model("User", userSchema);



app.use(express.json());



app.get('/hello',(req,res)=>{
    res.send('Hello World');

}
);

app.get('/add/:a/:b',(req,res)=>{
    const a=Number(req.params.a);
    const b=Number(req.params.b);
    console.log(__dirname);
    res.sendFile(path.join(__dirname,"public",'index.html'));

    //res.send((a+b).toString());

});


app.get('/getUsers',(req,res)=>{
    User.find({name:"shyam"}).then((user,err)=>{
        console.log(user);
        res.send(JSON.stringify(user));
    }).catch((err)=>{
        console.log(err);
    }   );

    //res.send("ok!");
})


app.post("/addUser",(req,res)=>{

    const name2=req.body.name;
    const age2=req.body.age;

    const user=new User({name:name2,age:age2});
    user.save().then(()=>{
        console.log("user saved");
        res.send("user saved");
    }).catch((err)=>{
        console.log(err);
        res.send(err);
    });



})


app.post('/add',(req,res)=>{
    
    const a=Number(req.body.a);
    const b=Number(req.body.b);
   
    res.send((a+b).toString());

});













app.listen(4000,()=>{
    console.log('server is running on port 4000');
});