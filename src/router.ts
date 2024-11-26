import { Router } from "express";
import { createAccount, login } from "./handlers";
import { body } from "express-validator";

const router = Router();

//Routing
router.post('/auth/register', 
    body('handle')
        .notEmpty()
        .withMessage('Handle cannot be empty'),
    body('name')
        .notEmpty()
        .withMessage('Name cannot be empty'),
    body('email')
        .isEmail()
        .withMessage('Email is not valid'),
    body('password')
        .isLength({min: 8})
        .withMessage('Password too short, minimum 8 characters'),
    createAccount
);

router.post('/auth/login',
    body('email')
        .isEmail()
        .withMessage('Email is not valid'),
    body('password')
        .isLength({min: 8})
        .withMessage('Password is mandatory'),
    login
)


export default router;