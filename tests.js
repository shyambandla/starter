const Shyam=require("./Shyam");


const shyam=new Shyam((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },2000);
}
);
shyam.then((res)=>{
    console.log(res);
});

// shyam.catch((err)=>{
//     console.log(err);
// });
