// ====== GET DENDA ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Get Denda Success:
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
 *              id_denda:
 *                type: string
 *                description: id denda
 *              nominal:
 *                type: string
 *                description: nominal
 *              createdAt:
 *                type: string
 *                description: created at
 *    Get Denda Unauthorized:
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

// ====== SEARCH DENDA ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Search Denda:
 *      type: object
 *      required:
 *        - nominal
 *      properties:
 *        nominal:
 *          type: integer
 *          description: nominal
 *    Search Denda Success:
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
 *            id_denda:
 *              type: string
 *              description: id denda
 *            nominal:
 *              type: integer
 *              description: nominal
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 *    Search Denda Unauthorized:
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
 *    Search Denda Not Found:
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

// ====== ADD DENDA ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Add Denda:
 *      type: object
 *      required:
 *        - nominal
 *      properties:
 *        nominal:
 *          type: integer
 *          description: nominal
 *    Add Denda Success:
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
 *            id_denda:
 *              type: string
 *              description: id denda
 *            nominal:
 *              type: integer
 *              description: nominal
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 *    Add Denda Unauthorized:
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
 *    Add Denda Bad Request:
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
 *    Add Denda Conflict:
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

// ====== GET DENDA BY ID ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Get Denda By ID Success:
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
 *            id_denda:
 *              type: string
 *              description: id denda
 *            nominal:
 *              type: integer
 *              description: nominal
 *            createdAt:
 *              type: string
 *              description: created at
 *    Get Denda By ID Unauthorized:
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
 *    Get Denda By ID Not Found:
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

// ====== UPDATE DENDA ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Update Denda:
 *      type: object
 *      required:
 *        - nominal
 *      properties:
 *        nominal:
 *          type: integer
 *          description: nominal
 *    Update Denda Success:
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
 *            id_denda:
 *              type: string
 *              description: id denda
 *            nominal:
 *              type: integer
 *              description: nominal
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 *    Update Denda Unauthorized:
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
 *    Update Denda Bad Request:
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
 *    Update Denda Not Found:
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
 *    Update Denda Conflict:
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
 *
 * */

// ====== DELETE DENDA ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Delete Denda Success:
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
 *    Delete Denda Unauthorized:
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
 *    Delete Denda Not Found:
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
 *
 * */