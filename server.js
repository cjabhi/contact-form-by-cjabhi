import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors'
import UserController from './controller/usercontroller.js';
import router from './routes/userRoute.js';
dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

// app.use('api/user' , router);
app.use(router);

app.listen(port , ()=>{
    console.log("server is running at port " , port);
})
