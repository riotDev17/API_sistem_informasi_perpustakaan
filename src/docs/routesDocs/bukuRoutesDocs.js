// ====== GET BUKU ======
/**
 * @openapi
 * /api/buku:
 *  get:
 *    tags:
 *      - Buku
 *    summary: Get Buku
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Buku Success'
 *
 * */

// ====== ADD BUKU ======
/**
 * @openapi
 * /api/buku:
 *  post:
 *    tags:
 *      - Buku
 *    summary: Add Buku
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            $ref: '#/components/schemas/Add Buku'
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Buku Success'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Buku Bad Request'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Buku Unauthorized'
 *      409:
 *        description: Conflict
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Buku Conflict'
 *
 * */