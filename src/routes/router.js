import express from 'express';
import adminController from '../controller/adminController.js';
import agamaController from '../controller/agamaController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = new express.Router();
router.use(authMiddleware);

// ADMIN
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

router.put('/api/admin/:adminId', adminController.updateAdminController);

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

// AGAMA
/**
 * @openapi
 * /api/agama:
 *  get:
 *    tags:
 *      - Agama
 *    summary: Get Agama
 *    description: Get Agama
 *    responses:
 *      200:
 *        description: Get Agama Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetAgamaSuccess'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetAgamaUnauthorized'
 *
 * */
router.get('/api/agama', agamaController.getAgamaController);

/**
 * @openapi
 * /api/agama/search:
 *  get:
 *    tags:
 *      - Agama
 *    summary: Search Agama
 *    description: Search Agama
 *    parameters:
 *      - name: nama_agama
 *        in: query
 *        required: true
 *        description: search agama
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Search Agama Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SearchAgamaSuccess'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SearchAgamaUnauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SearchAgamaNotFound'
 *
 * */
router.get('/api/agama/search', agamaController.searchAgamaController);

/**
 * @openapi
 * /api/agama:
 *  post:
 *    tags:
 *      - Agama
 *    summary: Add Agama
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/AddAgama'
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AddAgamaSuccess'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AddAgamaBadRequest'
 * */
router.post('/api/agama', agamaController.createAgamaController);

/**
 * @openapi
 * /api/agama/{agamaId}:
 *  get:
 *    tags:
 *      - Agama
 *    summary: Get Agama By ID
 *    description: Get Agama By ID
 *    parameters:
 *      - name: agamaId
 *        in: path
 *        required: true
 *        description: id agama
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Get Agama By ID Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetAgamaByIdSuccess'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetAgamaByIdUnauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetAgamaByIdNotFound'
 *
 *
 * */
router.get('/api/agama/:agamaId', agamaController.getAgamaByIdController);

/**
 * @openapi
 * /api/agama/{agamaId}:
 *  put:
 *    tags:
 *      - Agama
 *    summary: Update Agama
 *    description: Update Agama
 *    parameters:
 *      - name: agamaId
 *        in: path
 *        required: true
 *        description: id agama
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UpdateAgama'
 *    responses:
 *      200:
 *        description: Update Agama Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateAgamaSuccess'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateAgamaBadRequest'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateAgamaUnauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateAgamaNotFound'
 *
 * */
router.put('/api/agama/:agamaId', agamaController.updateAgamaController);

/**
 * @openapi
 * /api/agama/{agamaId}:
 *  delete:
 *    tags:
 *      - Agama
 *    summary: Delete Agama
 *    description: Delete Agama
 *    parameters:
 *      - name: agamaId
 *        in: path
 *        required: true
 *        description: id agama
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Delete Agama Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/DeleteAgamaSuccess'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/DeleteAgamaUnauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/DeleteAgamaNotFound'
 *
 * */
router.delete('/api/agama/:agamaId', agamaController.deleteAgamaController);


export { router };