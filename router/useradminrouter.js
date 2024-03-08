import express from 'express';
import { userAdminController } from '../controller/useradmincontroller.js'; 

const Router = express.Router();

Router.post('/registrationadmin', userAdminController.register);
Router.post('/loginadmin', userAdminController.login);

export const useradminrouter = Router