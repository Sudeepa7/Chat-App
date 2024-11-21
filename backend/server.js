import express from "express";
import dotenv from "dotenv";
import authRoutes from "./route/auth.route.js";
import connectToMongoDb from "./DB/connectToMongoDB.js";

const app = express();
//making express server
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use("/api/auth",authRoutes);
app.use(express.json());  //to parse the incomming requests with json payloads (from req.body)

// app.get("/",(req,res)=>{
//      // root route http://localhost:5000/
//      res.send("Hello World");
// });

app.listen(PORT, () => {
     connectToMongoDb(); 
     console.log(`server running on port ${PORT}`);
});
