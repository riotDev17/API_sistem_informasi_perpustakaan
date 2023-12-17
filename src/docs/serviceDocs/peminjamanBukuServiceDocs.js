// ======= CREATE PEMINJAMAN BUKU ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Peminjaman Buku:
 *      type: object
 *      required:
 *        - id_buku
 *        - id_siswa
 *      properties:
 *        id_buku:
 *          type: string
 *          description: id buku
 *        id_siswa:
 *          type: string
 *          description: id siswa
 *    Peminjaman Buku Success:
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
 *            id_peminjaman:
 *              type: string
 *              description: id peminjaman
 *            buku:
 *              type: object
 *              properties:
 *                id_buku:
 *                  type: string
 *                  description: id buku
 *                judul_buku:
 *                  type: string
 *                  description: judul buku
 *                pengarang:
 *                  type: string
 *                  description: pengarang buku
 *                penerbit:
 *                  type: string
 *                  description: penerbit buku
 *                tahun_terbit:
 *                  type: string
 *                  description: tahun terbit buku
 *                deskripsi:
 *                  type: string
 *                  description: deskripsi buku
 *                stok_buku:
 *                  type: number
 *                  description: stok buku
 *                foto_buku:
 *                  type: string
 *                  description: foto buku
 *                rak_buku:
 *                  type: object
 *                  properties:
 *                    id_rak_buku:
 *                      type: string
 *                      description: id rak buku
 *                    nama_rak_buku:
 *                      type: string
 *                      description: nama rak buku
 *                createdAt:
 *                  type: string
 *                  description: create date buku
 *                updatedAt:
 *                  type: string
 *                  description: update date buku
 *            siswa:
 *              type: object
 *              properties:
 *                id_siswa:
 *                  type: string
 *                  description: id siswa
 *                no_anggota:
 *                  type: string
 *                  description: no anggota siswa
 *                nama_siswa:
 *                  type: string
 *                  description: nama siswa
 *                nis:
 *                  type: number
 *                  description: nis siswa
 *                nisn:
 *                  type: number
 *                  description: nisn siswa
 *                tanggal_lahir:
 *                  type: string
 *                  description: tanggal lahir siswa
 *                tempat_lahir:
 *                  type: string
 *                  description: tempat lahir siswa
 *                jenis_kelamin:
 *                  type: string
 *                  description: jenis kelamin siswa
 *                agama:
 *                  type: object
 *                  properties:
 *                    id_agama:
 *                      type: string
 *                      description: id agama
 *                    nama_agama:
 *                      type: string
 *                      description: nama agama
 *                alamat:
 *                  type: string
 *                  description: alamat siswa
 *                kelas:
 *                  type: object
 *                  properties:
 *                    id_kelas:
 *                      type: string
 *                      description: id kelas
 *                    nama_kelas:
 *                      type: string
 *                      description: nama kelas
 *                foto_siswa:
 *                  type: string
 *                  description: foto siswa
 *                createdAt:
 *                  type: string
 *                  description: create date siswa
 *                updatedAt:
 *                  type: string
 *                  description: update date siswa
 *            tanggal_pinjam:
 *              type: string
 *              description: tanggal pinjam
 *            tanggal_kembali:
 *              type: string
 *              description: tanggal kembali
 *            createdAt:
 *              type: string
 *              description: create date peminjaman
 *            updatedAt:
 *              type: string
 *              description: update date peminjaman
 *    Peminjaman Buku Unauthorized:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          description: status response
 *        message:
 *          type: string
 *          description: message response
 *    Peminjaman Buku Not Found:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          description: status response
 *        message:
 *          type: string
 *          description: message response
 *    Peminjaman Buku Conflict:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          description: status response
 *        message:
 *          type: string
 *          description: message response
 *
 *
 *
 * */