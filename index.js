import express from "express";
import cors from "cors"
import { json } from "express";
import connect from "./dbconnect.js";
import routes from "./routes.js"
let port = 6000;

const app = express();
app.use(json())
app.use(cors());
app.use('/api',routes)
app.listen(port,()=>{
    console.log("hello");
})
connect().then((e)=>console.log("connection established")).catch((error)=>console.log(error))
 