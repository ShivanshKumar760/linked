import express from "express";
import { signUpController,loginController } from "../controllers/auth.controller.js";


const router=express.Router();


router.post("/register",signUpController);

router.post("/login",loginController);

export default router;