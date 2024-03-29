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

// ====== SEARCH KELAS =======
/**
 * @openapi
 * /api/kelas/search:
 *  get:
 *    tags:
 *      - Kelas
 *    summary: Search Kelas
 *    description: Search Kelas
 *    parameters:
 *      - name: nama_kelas
 *        in: query
 *        required: true
 *        description: search kelas
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Search Kelas Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Kelas Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Kelas Unauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Kelas Not Found'
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


// ====== GET KELAS BY ID =======
/**
 * @openapi
 * /api/kelas/{kelasId}:
 *  get:
 *    tags:
 *      - Kelas
 *    summary: Get Kelas By ID
 *    description: Get Kelas By ID
 *    parameters:
 *      - name: kelasId
 *        in: path
 *        required: true
 *        description: id kelas
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Get Kelas By ID Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Kelas By ID Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Kelas By ID Unauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Kelas By ID Not Found'
 * */


// ====== UPDATE KELAS =======
/**
 * @openapi
 * /api/kelas/{kelasId}:
 *  put:
 *    tags:
 *      - Kelas
 *    summary: Update Kelas
 *    description: Update Kelas
 *    parameters:
 *      - name: kelasId
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
 *            $ref: '#/components/schemas/Update Kelas'
 *    responses:
 *      200:
 *        description: Update Kelas Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Update Kelas Success'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Update Kelas Bad Request'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Update Kelas Unauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Update Kelas Not Found'
 *      409:
 *        description: Conflict
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Update Kelas Conflict'
 * */

// ====== DELETE KELAS =======
/**
 * @openapi
 * /api/kelas/{kelasId}:
 *  delete:
 *    tags:
 *      - Kelas
 *    summary: Delete Kelas
 *    description: Delete Kelas
 *    parameters:
 *      - name: kelasId
 *        in: path
 *        required: true
 *        description: id kelas
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Delete Kelas Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Delete Kelas Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Delete Kelas Unauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Delete Kelas Not Found'
 * */