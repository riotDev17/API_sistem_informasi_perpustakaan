// ======= GET PEMINJAMAN BUKU ======
/**
 * @openapi
 * /api/peminjaman-buku:
 *  get:
 *    tags:
 *      - Peminjaman Buku
 *    summary: Get Peminjaman Buku
 *    responses:
 *      200:
 *        description: Get Peminjaman Buku Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Peminjaman Buku Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Peminjaman Buku Unauthorized'
 *
 * */

// ======= CREATE PEMINJAMAN BUKU ======
/**
 * @openapi
 * /api/peminjaman-buku/{siswaId}:
 *  post:
 *    tags:
 *      - Peminjaman Buku
 *    summary: Create Peminjaman Buku
 *    parameters:
 *      - name: siswaId
 *        in: path
 *        required: true
 *        description: Siswa ID
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Peminjaman Buku'
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Peminjaman Buku Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Peminjaman Buku Unauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Peminjaman Buku Not Found'
 *      409:
 *        description: Conflict
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Peminjaman Buku Conflict'
 *
 *
 * */

// ======= SEARCH PEMINJAMAN BUKU ======
/**
 * @openapi
 * /api/peminjaman-buku/search:
 *  get:
 *    tags:
 *      - Peminjaman Buku
 *    summary: Search Peminjaman Buku
 *    parameters:
 *      - name: no_anggota
 *        in: query
 *        required: true
 *        description: search peminjaman buku
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Search Peminjaman Buku Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Peminjaman Buku Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Peminjaman Buku Unauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Peminjaman Buku Not Found'
 *
 * */

// ======= DELETE PEMINJAMAN BUKU ======
/**
 * @openapi
 * /api/peminjaman-buku/{peminjamanBukuId}:
 *  delete:
 *    tags:
 *      - Peminjaman Buku
 *    summary: Delete Peminjaman Buku
 *    parameters:
 *      - name: peminjamanBukuId
 *        in: path
 *        required: true
 *        description: Peminjaman Buku ID
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Delete Peminjaman Buku Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Delete Peminjaman Buku Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Delete Peminjaman Buku Unauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Delete Peminjaman Buku Not Found'
 *
 * */