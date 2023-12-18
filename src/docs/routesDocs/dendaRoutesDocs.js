// ====== GET DENDA ======
/**
 * @openapi
 * /api/denda:
 *  get:
 *    tags:
 *      - Denda
 *    summary: Get Denda
 *    description: Get Denda
 *    responses:
 *      200:
 *        description: Get Denda Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Denda Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Denda Unauthorized'
 * */

// ====== SEARCH DENDA ======
/**
 * @openapi
 * /api/denda/search:
 *  get:
 *    tags:
 *      - Denda
 *    summary: Search Denda
 *    description: Search Denda
 *    parameters:
 *      - name: nominal
 *        in: query
 *        required: true
 *        description: search denda
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: Search Denda Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Denda Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Denda Unauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Denda Not Found'
 *
 * */

// ====== ADD DENDA ======
/**
 * @openapi
 * /api/denda:
 *  post:
 *    tags:
 *      - Denda
 *    summary: Add Denda
 *    description: Add Denda
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Add Denda'
 *    responses:
 *      200:
 *        description: Add Denda Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Denda Success'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Denda Bad Request'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Denda Unauthorized'
 *      409:
 *        description: Conflict
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Denda Conflict'
 *
 * */

// ====== GET DENDA BY ID ======
/**
 * @openapi
 * /api/denda/{dendaId}:
 *  get:
 *    tags:
 *      - Denda
 *    summary: Get Denda By ID
 *    description: Get Denda By ID
 *    parameters:
 *      - name: dendaId
 *        in: path
 *        required: true
 *        description: id denda
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Get Denda By ID Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Denda By ID Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Denda By ID Unauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Denda By ID Not Found'
 *
 * */

// ====== UPDATE DENDA ======
/**
 * @openapi
 * /api/denda/{dendaId}:
 *  put:
 *    tags:
 *      - Denda
 *    summary: Update Denda
 *    description: Update Denda
 *    parameters:
 *      - name: dendaId
 *        in: path
 *        required: true
 *        description: id denda
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Update Denda'
 *    responses:
 *      200:
 *        description: Update Denda Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Update Denda Success'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Update Denda Bad Request'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Update Denda Unauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Update Denda Not Found'
 *      409:
 *        description: Conflict
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Update Denda Conflict'
 *
 * */

// ====== DELET DENDA ======
/**
 * @openapi
 * /api/denda/{dendaId}:
 *  delete:
 *    tags:
 *      - Denda
 *    summary: Delete Denda
 *    description: Delete Denda
 *    parameters:
 *      - name: dendaId
 *        in: path
 *        required: true
 *        description: id denda
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Delete Denda Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Delete Denda Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Delete Denda Unauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Delete Denda Not Found'
 *
 * */