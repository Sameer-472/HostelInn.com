import mongoose from "mongoose";
export const Connection=async(username,password)=>{
    const Url=`mongodb://${username}:${password}@ac-qalmuhw-shard-00-00.wwnzfy7.mongodb.net:27017,ac-qalmuhw-shard-00-01.wwnzfy7.mongodb.net:27017,ac-qalmuhw-shard-00-02.wwnzfy7.mongodb.net:27017/HostelIn?ssl=true&replicaSet=atlas-qcvju3-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
       await mongoose.connect(Url,{useUnifiedTopology:true});
       console.log('Successfully Connected to Database');
    } catch (error) {
        console.log('Connection to Db', error.message);
    }
}