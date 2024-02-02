import express from "express"
import dotenv from "dotenv"
import  mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import cropRoute from "./routes/crop.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import bodyParser from "body-parser"



dotenv.config()
const app = express()
let PORT = 8800

//middleware
app.use(cookieParser())
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connect = async () =>{

    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to Mongodb")
    } catch (error) {
        throw error
    }

}

mongoose.connection.on("disconnected", () =>{
    console.log("Disconnected from Mongodb")
})

mongoose.connection.on("connected",()=>{
    console.log("Connected to Mongodb")
})



app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/crops",cropRoute)



app.get("/",(req,res)=>{
    res.send("Master David!!")
})

app.listen(PORT,()=>{
    connect()
    console.log("Connected to backend!!")
})