import express from 'express';
import { dashboardController } from '../controller/dashboardcontroller.js'; 
const Router = express.Router();
Router.post('/storedashboard', dashboardController.newdashBoard);
Router.get('/getdashboard', dashboardController.getdashboard)
export const dbrouter = Router