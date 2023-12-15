// ======= CREATE RAK BUKU =======

/**
 * @openapi
 * components:
 *  schemas:
 *    Add Rak Buku:
 *      type: object
 *      required:
 *        - nama_rak_buku
 *      properties:
 *        nama_rak_buku:
 *          type: string
 *          description: nama rak buku
 *    Add Rak Buku Success:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Success
 *          description: Success
 *        message:
 *          type: string
 *          default: Message Success
 *          description: message
 *        data:
 *          type: object
 *          properties:
 *            id_rak_buku:
 *              type: string
 *              description: id rak buku
 *            nama_rak_buku:
 *              type: string
 *              description: nama rak buku
 *            createdAt:
 *              type: string
 *              description: waktu dibuat
 *            updatedAt:
 *              type: string
 *              description: waktu diupdate
 *    Add Rak Buku Bad Request:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Bad Request
 *          description: Bad Request
 *        message:
 *          type: string
 *          default: Message Bad Request
 *          description: message
 *    Add Rak Buku Unauthorized:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Unauthorized
 *          description: Unauthorized
 *        message:
 *          type: string
 *          default: Message Unauthorized
 *          description: message
 *    Add Rak Buku Conflict:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Conflict
 *          description: Conflict
 *        message:
 *          type: string
 *          default: Message Conflict
 *          description: message
 *
 *
 *
 * */