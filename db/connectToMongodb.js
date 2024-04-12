import mongoose from "mongoose";

const connectToMongodb= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to mongodb");
    }
    catch{
        console.log("error connecting to Mongodb",error.message);
    }
}

export default connectToMongodb;