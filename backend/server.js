import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./route/auth.route.js";
import messageRoutes from "./route/message.route.js";
import userRoutes from "./route/user.route.js"

import connectToMongoDb from "./DB/connectToMongoDB.js";

const app = express();
//making express server
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());  //to parse the incomming requests with json payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

// app.get("/",(req,res)=>{
//      // root route http://localhost:5000/
//      res.send("Hello World");
// });

app.listen(PORT, () => {
     connectToMongoDb(); 
     console.log(`server running on port ${PORT}`);
});
