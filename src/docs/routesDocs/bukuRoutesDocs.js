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
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Buku Unauthorized'
 *
 * */

// ====== SEARCH BUKU ======
/**
 * @openapi
 * /api/buku/search:
 *  get:
 *    tags:
 *      - Buku
 *    summary: Search Buku
 *    description: Search Buku
 *    parameters:
 *      - name: judul_buku
 *        in: query
 *        required: true
 *        description: search buku
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Search Buku Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Buku Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Buku Unauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Buku Not Found'
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

// ====== GET BUKU BY ID ======
/**
 * @openapi
 * /api/buku/{bukuId}:
 *  get:
 *    tags:
 *      - Buku
 *    summary: Get Buku By ID
 *    description: Get Buku By ID
 *    parameters:
 *      - name: bukuId
 *        in: path
 *        required: true
 *        description: id buku
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Buku By ID Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Buku By ID Unauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Buku By ID Not Found'
 *
 * */