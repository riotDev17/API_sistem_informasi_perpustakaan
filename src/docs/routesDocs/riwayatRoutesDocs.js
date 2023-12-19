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