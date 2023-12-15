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

// ======= SEARCH RAK BUKU =======
/**
 * @openapi
 * /api/rak-buku/search:
 *  get:
 *    tags:
 *      - Rak Buku
 *    summary: Search Rak Buku
 *    parameters:
 *      - name: nama_rak_buku
 *        in: query
 *        required: true
 *        description: search rak buku
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Rak Buku Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Rak Buku Unauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Rak Buku Not Found'
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