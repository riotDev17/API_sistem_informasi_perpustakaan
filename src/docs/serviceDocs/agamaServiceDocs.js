// ====== GET AGAMA ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Get Agama Success:
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
 *              id_agama:
 *                type: string
 *                description: id agama
 *              nama_agama:
 *                type: string
 *                description: nama agama
 *              createdAt:
 *                type: string
 *                description: created at
 *              updatedAt:
 *                type: string
 *                description: updated at
 *    Get Agama Unauthorized:
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
 * */

// ====== SEARCH AGAMA ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Search Agama:
 *      type: object
 *      required:
 *        - nama_agama
 *      properties:
 *        nama_agama:
 *          type: string
 *          description: nama agama
 *    Search Agama Success:
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
 *              id_agama:
 *                type: string
 *                description: id agama
 *              nama_agama:
 *                type: string
 *                description: nama agama
 *              createdAt:
 *                type: string
 *                description: created at
 *              updatedAt:
 *                type: string
 *                description: updated at
 *    Search Agama Unauthorized:
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
 *    Search Agama Not Found:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Not Found
 *          description: Status
 *        message:
 *          type: string
 *          default: Message Not Found
 *          description: message
 * */

// ====== ADD AGAMA ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Add Agama:
 *      type: object
 *      required:
 *        - nama_agama
 *      properties:
 *        nama_agama:
 *          type: string
 *          description: nama agama
 *    Add Agama Success:
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
 *            id_agama:
 *              type: string
 *              description: id agama
 *            nama_agama:
 *              type: string
 *              description: nama agama
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 *    Add Agama Unauthorized:
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
 *    Add Agama Bad Request:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Error
 *          description: Failed
 *        message:
 *          type: string
 *          default: Message Bad Request
 *          description: message
 *    Add Agama Conflict:
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

// ====== GET AGAMA BY ID ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Get Agama By ID Success:
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
 *            id_agama:
 *              type: string
 *              description: id agama
 *            nama_agama:
 *              type: string
 *              description: nama agama
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 *    Get Agama By ID Unauthorized:
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
 *    Get Agama By ID Not Found:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Not Found
 *          description: Status
 *        message:
 *          type: string
 *          default: Message Not Found
 *          description: message
 *
 * */

// ====== UPDATE AGAMA ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Update Agama:
 *      type: object
 *      required:
 *        - nama_agama
 *      properties:
 *        nama_agama:
 *          type: string
 *          description: nama agama
 *    Update Agama Success:
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
 *            id_agama:
 *              type: string
 *              description: id agama
 *            nama_agama:
 *              type: string
 *              description: nama agama
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 *    Update Agama Unauthorized:
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
 *    Update Agama Bad Request:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Bad Request
 *          description: Status
 *        message:
 *          type: string
 *          default: Message Bad Request
 *          description: message
 *    Update Agama Not Found:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Not Found
 *          description: Status
 *        message:
 *          type: string
 *          default: Message Not Found
 *          description: message
 *    Update Agama Conflict:
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

// ====== DELETE AGAMA ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Delete Agama Success:
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
 *    Delete Agama Unauthorized:
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
 *    Delete Agama Not Found:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Not Found
 *          description: Status
 *        message:
 *          type: string
 *          default: Message Not Found
 *          description: message
 * */