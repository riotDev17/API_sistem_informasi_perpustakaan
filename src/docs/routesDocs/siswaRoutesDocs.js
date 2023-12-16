// ====== GET SISWA ======
/**
 * @openapi
 * /api/siswa:
 *  get:
 *    tags:
 *      - Siswa
 *    summary: Get Siswa
 *    description: Get Siswa
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Siswa Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Siswa Unauthorized'
 *
 * */

// ====== ADD SISWA ======
/**
 * @openapi
 * /api/siswa:
 *  post:
 *    tags:
 *      - Siswa
 *    summary: Add Siswa
 *    requestBody:
 *      content:
 *        multipart/form-data:
 *          schema:
 *            $ref: '#/components/schemas/Add Siswa'
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Siswa Success'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Siswa Bad Request'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Siswa Unauthorized'
 *      409:
 *        description: Conflict
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Siswa Conflict'
 *
 *
 * */