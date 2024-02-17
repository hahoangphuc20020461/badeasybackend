import express from 'express';
import { dashboardController } from '../controller/dashboardcontroller'; 
const Router = express.Router();
Router.post('/storedashboard', dashboardController.newdashBoard);
export const dbrouter = Router