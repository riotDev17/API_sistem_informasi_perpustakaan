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

// ====== SEARCH SISWA ======
/**
 * @openapi
 * /api/siswa/search:
 *  get:
 *    tags:
 *      - Siswa
 *    summary: Search Siswa
 *    description: Search Siswa
 *    parameters:
 *      - in: query
 *        name: nama_siswa
 *        description: Nama Siswa
 *        schema:
 *          type: string
 *      - in: query
 *        name: no_anggota
 *        description: No Anggota
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Siswa Success'
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