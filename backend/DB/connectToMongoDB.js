import mongoose, { connect } from "mongoose";

const connectToMongoDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log ("Error connected to mongoDB.",error.message);
    }
};

export default connectToMongoDb;