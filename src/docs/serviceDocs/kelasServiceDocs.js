// ======= ADD KELAS =======
/**
 * @openapi
 * components:
 *  schemas:
 *    Add Kelas:
 *      type: object
 *      required:
 *        - nama_kelas
 *      properties:
 *        nama_kelas:
 *          type: string
 *          description: nama kelas
 *    Add Kelas Success:
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
 *            id_kelas:
 *              type: string
 *              description: id kelas
 *            nama_kelas:
 *              type: string
 *              description: nama kelas
 *            createdAt:
 *              type: string
 *              description: create date kelas
 *            updatedAt:
 *              type: string
 *              description: update date kelas
 *    Add Kelas Bad Request:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Bad Request
 *          description: Bad Request
 *        message:
 *          type: string
 *          default: Message Bad Request
 *          description: Bad Request
 *    Add Kelas Unauthorized:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Unauthorized
 *          description: Unauthorized
 *        message:
 *          type: string
 *          default: Message Unauthorized
 *          description: Unauthorized
 *    Add Kelas Conflict:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Conflict
 *          description: Conflict
 *        message:
 *          type: string
 *          default: Message Conflict
 *          description: Conflict
 * */