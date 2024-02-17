
import express from 'express';
import { userController } from '../controller/usercontroller.js';

const Router = express.Router();

Router.post('/registration', userController.register);
Router.post('/login', userController.login);

export const router = Router