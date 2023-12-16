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
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Siswa Unauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Siswa Not Found'
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

// ====== GET SISWA BY ID ======
/**
 * @openapi
 * /api/siswa/{siswaId}:
 *  get:
 *    tags:
 *      - Siswa
 *    summary: Get Siswa By Id
 *    description: Get Siswa By Id
 *    parameters:
 *      - in: path
 *        name: siswaId
 *        description: Siswa ID
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Get Siswa By Id Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Siswa By ID Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Siswa By ID Unauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Siswa By ID Not Found'
 *
 * */