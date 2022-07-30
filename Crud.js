const express=require('express');

const app=express();

app.use(express.json());


const multer=require('multer');

const upload=multer({dest:'uploads/'});



const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/crud").then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{

    console.log(err);
});

const UserSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    password:String,
    file:String
});

const User=mongoose.model("User",UserSchema);



app.post("/register",upload.single("avatar"),(req,res)=>{
    const body=req.body;
    const file=req.file;
    console.log(    file);
   body.file=`${file.path}.jpg`;
    const user=new User(body);
    user.save().then(()=>{
        res.send("user saved");
    }
    ).catch((err)=>{
        res.send(err);
    }
    );
})

app.post("/login",(req,res)=>{
    const body=req.body;
    
    User.findOne({email:body.email,password:body.password}).then((user)=>{
        if(user){
            res.send("user found");
        }else{
            res.send("user not found");
        }
       
    }).catch((err)=>{
        res.send(err);
    }
    );
}
);


app.post("/update",(req,res)=>{
    const body=req.body;
    User.findOneAndUpdate({email:body.email,password:body.password},{name:body.name,age:body.age},{upsert:true}).then((user)=>{
        if(user){
            res.send("user updated");
        }else{
            res.send("user not found");
        }
       
    }).catch((err)=>{
        res.send(err);
    }
    );
}
);

app.post("/delete",(req,res)=>{
    const body=req.body;
    User.findOneAndDelete({email:body.email,password:body.password}).then((user)=>{
        if(user){
            res.send("user deleted");
        }else{
            res.send("user not found");
        }
       
    }).catch((err)=>{
        res.send(err);
    }
    );
}
);











app.listen(4000,()=>{

    console.log('server is running on port 4000');
}
);