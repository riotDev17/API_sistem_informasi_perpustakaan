// ======= GET RAK BUKU =======
/**
 * @openapi
 * components:
 *  schemas:
 *    Get Rak Buku Success:
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
 *              id_rak_buku:
 *                type: string
 *                description: id rak buku
 *              nama_rak_buku:
 *                type: string
 *                description: nama rak buku
 *              createdAt:
 *                type: string
 *                description: waktu dibuat
 *              updatedAt:
 *                type: string
 *                description: waktu diupdate
 *    Get Rak Buku Unauthorized:
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
 *
 * */

// ======= SEARCH RAK BUKU =======
/**
 * @openapi
 * components:
 *  schemas:
 *    Search Rak Buku:
 *      type: object
 *      required:
 *        - nama_rak_buku
 *      properties:
 *        nama_rak_buku:
 *          type: string
 *          description: nama rak buku
 *    Search Rak Buku Success:
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
 *              id_rak_buku:
 *                type: string
 *                description: id rak buku
 *              nama_rak_buku:
 *                type: string
 *                description: nama rak buku
 *              createdAt:
 *                type: string
 *                description: waktu dibuat
 *              updatedAt:
 *                type: string
 *                description: waktu diupdate
 *    Search Rak Buku Unauthorized:
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
 *    Search Rak Buku Not Found:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Not Found
 *          description: Not Found
 *        message:
 *          type: string
 *          default: Message Not Found
 *          description: message
 *
 *
 * */

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
 * */

// ======= GET RAK BUKU BY ID =======
/**
 * @openapi
 * components:
 *  schemas:
 *    Get Rak Buku By ID Success:
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
 *    Get Rak Buku By ID Unauthorized:
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
 *    Get Rak Buku By ID Not Found:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Not Found
 *          description: Not Found
 *        message:
 *          type: string
 *          default: Message Not Found
 *          description: message
 *
 * */

// ======= UPDATE RAK BUKU =======
/**
 * @openapi
 * components:
 *  schemas:
 *    Update Rak Buku:
 *      type: object
 *      required:
 *        - nama_rak_buku
 *      properties:
 *        nama_rak_buku:
 *          type: string
 *          description: nama rak buku
 *    Update Rak Buku Success:
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
 *    Update Rak Buku Bad Request:
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
 *    Update Rak Buku Unauthorized:
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
 *    Update Rak Buku Not Found:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Not Found
 *          description: Not Found
 *        message:
 *          type: string
 *          default: Message Not Found
 *          description: message
 *    Update Rak Buku Conflict:
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
 * */

// ======= DELETE RAK BUKU =======
/**
 * @openapi
 * components:
 *  schemas:
 *    Delete Rak Buku Success:
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
 *    Delete Rak Buku Unauthorized:
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
 *    Delete Rak Buku Not Found:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Not Found
 *          description: Not Found
 *        message:
 *          type: string
 *          default: Message Not Found
 *          description: message
 *
 *
 * */