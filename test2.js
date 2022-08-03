const axios=require('axios');

// axios({
//     method:"get",
//     url:"https://jsonplaceholder.typicode.com/users",
//     headers:{
//         "X-Custom-Header":"shyam"
//     },
//     params:{
//         name:"Glenna Reichert"
//     }

// }).then((response)=>{
//     console.log(response);
// }
// ).catch((err)=>{
//     console.log(err);
// }
// );



axios({
    method:"post",
    url:"https://jsonplaceholder.typicode.com/users",
    data:{
        name:"shyam",
        age:25
    },
    headers:{
        "X-Custom-Header":"shyam"
    }

}).then((response)=>{
    console.log(response.data);
}
).catch((err)=>{
    console.log(err);
}
);