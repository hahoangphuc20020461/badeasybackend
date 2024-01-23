
import express from 'express';
import { userController } from '../controller/usercontroller.js';

const Router = express.Router();

Router.post('/registration', userController.register);
Router.post('/login', userController.register);

export const router = Router