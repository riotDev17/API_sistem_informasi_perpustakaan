// ======= GET RAK BUKU =======
/**
 * @openapi
 * /api/rak-buku:
 *  get:
 *    tags:
 *      - Rak Buku
 *    summary: Get Rak Buku
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Rak Buku Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Rak Buku Unauthorized'
 *
 * */


// ======= CREATE RAK BUKU =======

/**
 * @openapi
 * /api/rak-buku:
 *  post:
 *    tags:
 *      - Rak Buku
 *    summary: Create Rak Buku
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Add Rak Buku'
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Rak Buku Success'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Rak Buku Bad Request'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Rak Buku Unauthorized'
 *      409:
 *        description: Conflict
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Rak Buku Conflict'
 *
 * */