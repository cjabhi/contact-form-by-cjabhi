import  express from "express";
import UserController from "../controller/usercontroller.js";
const router = express.Router();


router.post('/sentmail' , UserController.sentmail)


export default router;