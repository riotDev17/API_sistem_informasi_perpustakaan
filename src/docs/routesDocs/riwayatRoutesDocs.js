// ======= GET RIWAYAT =======
/**
 * @openapi
 * /api/riwayat:
 *  get:
 *    tags:
 *      - Riwayat
 *    summary: Get Riwayat
 *    description: Get Riwayat
 *    responses:
 *      200:
 *        description: Get Riwayat Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Riwayat Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Riwayat Unauthorized'
 *
 * */

// ======= SEARCH RIWAYAT =======
/**
 * @openapi
 * /api/riwayat/search:
 *  get:
 *    tags:
 *      - Riwayat
 *    summary: Search Riwayat
 *    description: Search Riwayat
 *    parameters:
 *      - name: tanggal_pinjam
 *        in: query
 *        required: true
 *        description: search tanggal pinjam
 *        schema:
 *          type: string
 *      - name: tanggal_kembali
 *        in: query
 *        required: false
 *        description: search tanggal kembali
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Search Riwayat Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Riwayat Success'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Riwayat Unauthorized'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Search Riwayat Not Found'
 *
 * */