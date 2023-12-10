import express from 'express';
import adminController from '../controller/adminController.js';

const auth = new express.Router();

/**
 * @openapi
 * /auth/admin/register:
 *  post:
 *   tags:
 *    - Admin
 *   summary: Register Admin
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          $ref: '#/components/schemas/RegisterAdmin'
 *   responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/RegisterAdminSuccess'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/RegisterAdminFailed'
 */
auth.post('/auth/admin/register', adminController.registerAdminController);


/**
 * @openapi
 * /auth/admin/login:
 *  post:
 *    tags:
 *      - Admin
 *    summary: Login Admin
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/LoginAdmin'
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/LoginAdminSuccess'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/LoginAdminFailed'
 *
 * */
auth.post('/auth/admin/login', adminController.loginAdminController);

export { auth };