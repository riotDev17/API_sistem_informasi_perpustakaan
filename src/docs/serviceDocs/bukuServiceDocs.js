// ====== GET BUKU ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Get Buku Success:
 *      type: object
 *      properties:
 *        id_buku:
 *          type: string
 *          description: id buku
 *        judul_buku:
 *          type: string
 *          description: judul buku
 *        pengarang:
 *          type: string
 *          description: pengarang buku
 *        penerbit:
 *          type: string
 *          description: penerbit buku
 *        tahun_terbit:
 *          type: string
 *          description: tahun terbit buku
 *        deskripsi:
 *          type: string
 *          description: deskripsi buku
 *        stok_buku:
 *          type: string
 *          description: stok buku
 *        foto_buku:
 *          type: string
 *          description: foto buku
 *        rak_buku:
 *          type: object
 *          properties:
 *            id_rak_buku:
 *              type: string
 *              description: id rak buku
 *            nama_rak_buku:
 *              type: string
 *              description: nama rak buku
 *        createdAt:
 *          type: string
 *          description: create date
 *        updatedAt:
 *          type: string
 *          description: update date
 *    Get Buku Unauthorized:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          description: status response
 *        message:
 *          type: string
 *          default: Message Unauthorized
 *
 * */

// ====== ADD BUKU ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Add Buku:
 *      type: object
 *      required:
 *        - judul_buku
 *        - pengarang
 *        - penerbit
 *        - tahun_terbit
 *        - deskripsi
 *        - stok_buku
 *        - id_rak_buku
 *      properties:
 *        judul_buku:
 *          type: string
 *          description: judul buku
 *        pengarang:
 *          type: string
 *          description: pengarang buku
 *        penerbit:
 *          type: string
 *          description: penerbit buku
 *        tahun_terbit:
 *          type: string
 *          description: tahun terbit buku
 *        deskripsi:
 *          type: string
 *          description: deskripsi buku
 *        stok_buku:
 *          type: string
 *          description: stok buku
 *        foto_buku:
 *          type: file
 *          description: foto buku
 *        id_rak_buku:
 *          type: string
 *          description: id rak buku
 *    Add Buku Success:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          description: status response
 *        message:
 *          type: string
 *          description: message response
 *        data:
 *          type: object
 *          properties:
 *            id_buku:
 *              type: string
 *              description: id buku
 *            judul_buku:
 *              type: string
 *              description: judul buku
 *            pengarang:
 *              type: string
 *              description: pengarang buku
 *            penerbit:
 *              type: string
 *              description: penerbit buku
 *            tahun_terbit:
 *              type: string
 *              description: tahun terbit buku
 *            deskripsi:
 *              type: string
 *              description: deskripsi buku
 *            stok_buku:
 *              type: string
 *              description: stok buku
 *            foto_buku:
 *              type: string
 *              description: foto buku
 *            rak_buku:
 *              type: object
 *              properties:
 *                id_rak_buku:
 *                  type: string
 *                  description: id rak buku
 *                nama_rak_buku:
 *                  type: string
 *                  description: nama rak buku
 *            createdAt:
 *              type: string
 *              description: create date
 *            updatedAt:
 *              type: string
 *              description: update date
 *    Add Buku Bad Request:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          description: status response
 *        message:
 *          type: string
 *          default: Message Bad Request
 *          description: message response
 *    Add Buku Unauthorized:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          description: status response
 *        message:
 *          type: string
 *          default: Message Unauthorized
 *          description: message response
 *    Add Buku Conflict:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          description: status response
 *        message:
 *          type: string
 *          default: Message Conflict
 *          description: message response
 *
 *
 * */