import express from "express"
import { configDotenv } from "dotenv";
import connectDB from "./db/connectDB.js";
import linkrouter from "./routes/linkRoute.js"

configDotenv();
const port = process.env.PORT | 3000
const app = express();
connectDB();


app.use(express.json());
app.use(linkrouter);

app.listen(port, ()=>{
    console.log("Server running at port " + port)
})