// ====== GET KELAS =======
/**
 * @openapi
 * /api/kelas:
 *  get:
 *    tags:
 *      - Kelas
 *    summary: Get Kelas
 *    description: Get Kelas
 *    responses:
 *      200:
 *        description: Get Kelas Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Kelas Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Kelas Unauthorized'
 *
 * */


// ====== ADD KELAS =======
/**
 * @openapi
 * /api/kelas:
 *  post:
 *   tags:
 *     - Kelas
 *   summary: Add Kelas
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/Add Kelas'
 *   responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Kelas Success'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Kelas Bad Request'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Kelas Unauthorized'
 *      409:
 *        description: Conflict
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Kelas Conflict'
 * */