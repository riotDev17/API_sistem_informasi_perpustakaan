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