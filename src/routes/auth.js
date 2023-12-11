import express from 'express';
import adminController from '../controller/adminController.js';

const auth = new express.Router();

auth.post('/auth/admin/register', adminController.registerAdminController);
auth.post('/auth/admin/login', adminController.loginAdminController);

export { auth };