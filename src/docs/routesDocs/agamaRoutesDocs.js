// ======= GET AGAMA =======
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
 *              $ref: '#/components/schemas/Get Agama Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Agama Unauthorized'
 * */

// ====== SEARCH AGAMA ======
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
 *              $ref: '#/components/schemas/Search Agama Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Agama Unauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Agama Not Found'
 * */

// ====== ADD AGAMA ======
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
 *            $ref: '#/components/schemas/Add Agama'
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Agama Success'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Agama Bad Request'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Agama Unauthorized'
 *      409:
 *        description: Conflict
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Agama Conflict'
 * */

// ====== GET AGAMA BY ID ======
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
 *              $ref: '#/components/schemas/Get Agama By ID Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Agama By ID Unauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Agama By ID Not Found'
 *
 *
 * */


// ====== UPDATE AGAMA ======
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
 *            $ref: '#/components/schemas/Update Agama'
 *    responses:
 *      200:
 *        description: Update Agama Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Update Agama Success'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Update Agama Bad Request'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Update Agama Unauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Update Agama Not Found'
 *      409:
 *        description: Conflict
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Update Agama Conflict'
 *
 * */

// ====== DELETE AGAMA ======
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
 *              $ref: '#/components/schemas/Delete Agama Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Delete Agama Unauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Delete Agama Not Found'
 *
 * */