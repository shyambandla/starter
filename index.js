const express=require('express');
const app=express();
const path=require('path');

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


app.post('/add',(req,res)=>{
    const a=Number(req.body.a);
    const b=Number(req.body.b);
    res.send((a+b).toString());

});













app.listen(4000,()=>{
    console.log('server is running on port 4000');
}   );