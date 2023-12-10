import express from 'express';
import adminController from '../controller/adminController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = new express.Router();
router.use(authMiddleware);

/**
 * @openapi
 * /api/admin:
 *  get:
 *    tags:
 *      - Admin
 *    summary: Get Admin
 *    description: Get Admin
 *    responses:
 *      200:
 *        description: Get Admin Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetAdminSuccess'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UnauthorizedGetAdmin'
 *
 * */
router.get('/api/admin', adminController.getAdminController);


/**
 * @openapi
 * /api/admin/logout:
 *  delete:
 *    tags:
 *      - Admin
 *    summary: Logout Admin
 *    description: Logout Admin
 *    responses:
 *      200:
 *        description: Logout Admin Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/LogoutAdminSuccess'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UnauthorizedLogoutAdmin'
 *
 * */
router.delete('/api/admin/logout', adminController.logoutAdminController);

export { router };