import express from 'express';
import { jwtMiddleware } from '../middleware/jwtmiddleware.js';
import { dashboardController } from '../controller/dashboardcontroller.js'; 
const Router = express.Router();
Router.post('/storedashboard', dashboardController.newdashBoard);
Router.get('/getdashboard',jwtMiddleware.verifyToken, dashboardController.getdashboard)
export const dbrouter = Router