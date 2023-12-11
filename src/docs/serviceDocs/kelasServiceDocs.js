// ======= GET KELAS =======
/**
 * @openapi
 * components:
 *  schemas:
 *    Get Kelas Success:
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
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              id_kelas:
 *                type: string
 *                description: id kelas
 *              nama_kelas:
 *                type: string
 *                description: nama kelas
 *              createdAt:
 *                type: string
 *                description: create date kelas
 *              updatedAt:
 *                type: string
 *                description: update date kelas
 *    Get Kelas Unauthorized:
 *        type: object
 *        properties:
 *          status:
 *            type: string
 *            default: Unauthorized
 *            description: Unauthorized
 *          message:
 *            type: string
 *            default: Message Unauthorized
 *            description: message
 * */

// ======= SEARCH KELAS =======
/**
 * @openapi
 * components:
 *  schemas:
 *    Search Kelas:
 *      type: object
 *      required:
 *        - nama_kelas
 *      properties:
 *        nama_kelas:
 *          type: string
 *          description: nama kelas
 *    Search Kelas Success:
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
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              id_kelas:
 *                type: string
 *                description: id kelas
 *              nama_kelas:
 *                type: string
 *                description: nama kelas
 *              createdAt:
 *                type: string
 *                description: create date kelas
 *              updatedAt:
 *                type: string
 *                description: update date kelas
 *    Search Kelas Unauthorized:
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
 *    Search Kelas Not Found:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Not Found
 *          description: Not Found
 *        message:
 *          type: string
 *          default: Message Not Found
 *          description: Message Not Found
 *
 * */

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


// ======= GET KELAS BY ID =======
/**
 * @openapi
 * components:
 *  schemas:
 *    Get Kelas By ID Success:
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
 *    Get Kelas By ID Unauthorized:
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
 *    Get Kelas By ID Not Found:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Not Found
 *          description: Not Found
 *        message:
 *          type: string
 *          default: Message Not Found
 *          description: Message Not Found
 * */


// ======= UPDATE KELAS =======
/**
 * @openapi
 * components:
 *  schemas:
 *    Update Kelas:
 *      type: object
 *      required:
 *        - nama_kelas
 *      properties:
 *        nama_kelas:
 *          type: string
 *          description: nama kelas
 *    Update Kelas Success:
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
 *    Update Kelas Bad Request:
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
 *    Update Kelas Unauthorized:
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
 *    Update Kelas Not Found:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Not Found
 *          description: Not Found
 *        message:
 *          type: string
 *          default: Message Not Found
 *          description: Message Not Found
 *    Update Kelas Conflict:
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

// ======= DELETE KELAS =======
/**
 * @openapi
 * components:
 *  schemas:
 *    Delete Kelas Success:
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
 *    Delete Kelas Unauthorized:
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
 *    Delete Kelas Not Found:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Not Found
 *          description: Not Found
 *        message:
 *          type: string
 *          default: Message Not Found
 *          description: Message Not Found
 * */