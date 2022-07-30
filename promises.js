


const p=new Promise((resolve,reject)=>{

    console.log(typeof resolve);

    try{
    setTimeout(()=>{
        resolve('Success');
    },2000);
}catch(err){
    reject(err);

}

}
);


p.then((res)=>{
    console.log(res);
}
).catch((err)=>{
    console.log(err);
});

const promises=[]

for(let i=0;// initializer
    i<100;// condition 
    i++// incrementer
    ){
    let p=new Promise((resolve,reject)=>{

    try{
        setTimeout(()=>{
            if(i%2==0){
               // console.log(i);
            resolve(i);
            }else{
              //  console.log(i);
                reject(i);
            }
        },2000);

    }catch(err){
        reject(err);
    }
});


promises.push(p);
}



Promise.all(promises).then((res)=>{
    console.log(res);
}   ).catch((err)=>{
   console.log(err);
});