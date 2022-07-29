
const callback=(res)=>{
    console.log(res);
}


const add=(a,b,successCallback,errorCallback)=>{

    setTimeout(()=>{
        callback(a+b);
    },2000);

    
}

add(1,2,callback);




