import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./route/auth.route.js";
import messageRoutes from "./route/message.route.js";
import userRoutes from "./route/user.route.js"

import connectToMongoDb from "./DB/connectToMongoDB.js";
import {app,server} from "./socket/socket.js"

const PORT = process.env.PORT || 5000;
const _dirname = path.resolve();

//const app = express();
//making express server

dotenv.config();

app.use(express.json());  //to parse the incomming requests with json payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(_dirname,"/frontend/dist")));

app.get("*",(req,res) => {
    res.sendFile(path.join(_dirname,"/fronend","dist","index.html"));
});
// app.get("/",(req,res)=>{
//      // root route http://localhost:5000/
//      res.send("Hello World");
// });

server.listen(PORT, () => {
     connectToMongoDb();
     console.log(`Server running on port ${PORT}`);
 });
