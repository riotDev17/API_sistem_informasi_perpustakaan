// ======= ADMIN REGISTER =======
/**
 * @openapi
 * components:
 *  schemas:
 *    Register Admin:
 *      type: object
 *      required:
 *        - username
 *        - password
 *      properties:
 *        username:
 *          type: string
 *          description: username admin
 *        password:
 *          type: string
 *          description: password admin
 *    Register Admin Success:
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
 *            id_admin:
 *              type: string
 *              description: id admin
 *            username:
 *              type: string
 *              description: username admin
 *            foto_admin:
 *              type: string
 *              description: foto admin
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 *    Register Admin Bad Request:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Bad Request
 *          description: Status
 *        message:
 *          type: string
 *          default: Message Bad Request
 *          description: Message
 *    Register Admin Conflict:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Conflict
 *          description: Status
 *        message:
 *          type: string
 *          default: Message Conflict
 *          description: Message
 *
 */


// ======= ADMIN LOGIN =======
/**
 * @openapi
 * components:
 *  schemas:
 *    Login Admin:
 *      type: object
 *      required:
 *        - username
 *        - password
 *      properties:
 *        username:
 *          type: string
 *          description: username admin
 *        password:
 *          type: string
 *          description: password admin
 *    Login Admin Success:
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
 *            token:
 *              type: string
 *              description: token
 *    Login Admin Bad Request:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Bad Request
 *          description: Status
 *        message:
 *          type: string
 *          default: Message Bad Request
 *          description: Message
 *    Login Admin Unauthorized:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Unauthorized
 *          description: Unauthorized
 *        message:
 *          type: string
 *          default: Message Unauthorized
 *          description: Message Unauthorized
 * */


// ======= ADMIN GET DATA =======
/**
 * @openapi
 * components:
 *  schemas:
 *    Get Admin Success:
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
 *            id_admin:
 *              type: string
 *              description: id admin
 *            username:
 *              type: string
 *              description: username admin
 *            foto_admin:
 *              type: string
 *              description: foto admin
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 *    Get Admin Unauthorized:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Unauthorized
 *          description: Unauthorized
 *        message:
 *          type: string
 *          default: Message Unauthorized
 *          description: Message Unauthorized
 *
 * */

// ======== ADMIN UPDATE =========
/**
 * @openapi
 * components:
 *  schemas:
 *    Update Admin:
 *      type: object
 *      required:
 *        - username
 *      properties:
 *        username:
 *          type: string
 *          description: username admin
 *        foto_admin:
 *          type: file
 *          description: foto admin
 *    Update Admin Success:
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
 *            id_admin:
 *              type: string
 *              description: id admin
 *            username:
 *              type: string
 *              description: username admin
 *            foto_admin:
 *              type: string
 *              description: foto admin
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 *    Update Admin Bad Request:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Bad Request
 *          description: Status
 *        message:
 *          type: string
 *          default: Message Bad Request
 *          description: Message
 *    Update Admin Unauthorized:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Unauthorized
 *          description: Unauthorized
 *        message:
 *          type: string
 *          default: Message Unauthorized
 *          description: Message Unauthorized
 *    Update Admin Not Found:
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
 *    Update Admin Conflict:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Conflict
 *          description: Conflict
 *        message:
 *          type: string
 *          default: Message Conflict
 *          description: Message Conflict
 *
 *
 * */

// ======== ADMIN LOGOUT =========
/**
 * @openapi
 * components:
 *  schemas:
 *    Logout Admin Success:
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
 *    Logout Admin Unauthorized:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Unauthorized
 *          description: Unauthorized
 *        message:
 *          type: string
 *          default: Message Unauthorized
 *          description: Message Unauthorized
 * */