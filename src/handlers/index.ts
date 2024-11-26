import type { Request, Response } from "express";
import slug from 'slug';
import User from "../models/User";
import { hashPassword } from "../utils/auth";
import { validationResult } from "express-validator";

export const createAccount = async (req: Request, res: Response | any) => {

    let errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
  
    const { email, password } = req.body;

    const userExists = await User.findOne({email});
    if(userExists){
        const error = new Error('User already exists');
        return res.status(409).json({error: error.message});
    }

    // const handle = slug(req.body.handle, '');
    // const handleExists = await User.findOne({handle});
    // if(handleExists){
    //     const error = new Error('Handle already exists');
    //     return res.status(409).json({error: error.message});
    // }

    const user = new User(req.body);
    user.password = await hashPassword(password);
    // user.handle = handle;
    await user.save();
    res.status(201).send("User successfully created");
}

export const login = async (req: Request, res: Response | any) => {
    let errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
}