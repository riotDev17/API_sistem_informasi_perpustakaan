// ======== ADMIN REGISTER =========
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
 *          $ref: '#/components/schemas/Register Admin'
 *   responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Register Admin Success'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Register Admin Bad Request'
 *      409:
 *        description: Conflict
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Register Admin Conflict'
 */


// ======== ADMIN LOGIN =========
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
 *            $ref: '#/components/schemas/Login Admin'
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Login Admin Success'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Login Admin Bad Request'
 *
 * */

// ======== ADMIN GET DATA =========
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
 *              $ref: '#/components/schemas/Get Admin Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Admin Unauthorized'
 *
 * */

// ======== ADMIN LOGOUT =========
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
 *              $ref: '#/components/schemas/Logout Admin Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Logout Admin Unauthorized'
 *
 * */