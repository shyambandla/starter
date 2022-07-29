class Shyam{
    

    value=(value)=>{};
    error;
    static callback;
    constructor(executor){
        executor(this.resolve,this.reject);
    }

   then=(response)=>{
        // response(this.value)
       // this.resolve();
    //    this.value=response;
    this.callback=response;
    }

    catch(error){

    }
    resolve(value){
       console.log(value);
    //    console.log(this);
    }

    reject(error){
       console.log(error);
    }

    
    
}

module.exports=Shyam;