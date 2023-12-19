// ======= GET RIWAYAT =======
/**
 * @openapi
 * components:
 *  schemas:
 *    Get Riwayat Success:
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
 *              id_riwayat:
 *                type: string
 *                description: id riwayat
 *              buku:
 *                type: object
 *                properties:
 *                  id_buku:
 *                    type: string
 *                    description: id buku
 *                  judul_buku:
 *                    type: string
 *                    description: judul buku
 *                  pengarang:
 *                    type: string
 *                    description: pengarang buku
 *                  penerbit:
 *                    type: string
 *                    description: penerbit buku
 *                  tahun_terbit:
 *                    type: number
 *                    description: tahun terbit buku
 *                  deskripsi:
 *                    type: string
 *                    description: deskripsi buku
 *                  stok_buku:
 *                    type: number
 *                    description: stok buku
 *                  foto_buku:
 *                    type: string
 *                    description: foto buku
 *                  rak_buku:
 *                    type: object
 *                    properties:
 *                      id_rak_buku:
 *                        type: string
 *                        description: id rak buku
 *                      nama_rak_buku:
 *                        type: string
 *                        description: nama rak buku
 *                  createdAt:
 *                    type: string
 *                    description: waktu dibuat
 *                  updatedAt:
 *                    type: string
 *                    description: waktu diupdate
 *              siswa:
 *                type: object
 *                properties:
 *                  id_siswa:
 *                    type: string
 *                    description: id siswa
 *                  no_anggota:
 *                    type: string
 *                    description: nomor anggota
 *                  nama_siswa:
 *                    type: string
 *                    description: nama siswa
 *                  nis:
 *                    type: number
 *                    description: nis siswa
 *                  nisn:
 *                    type: number
 *                    description: nisn siswa
 *                  tanggal_lahir:
 *                    type: string
 *                    description: tanggal lahir siswa
 *                  tempat_lahir:
 *                    type: string
 *                    description: tempat lahir siswa
 *                  jenis_kelamin:
 *                    type: string
 *                    description: jenis kelamin siswa
 *                  agama:
 *                    type: object
 *                    properties:
 *                      id_agama:
 *                        type: string
 *                        description: id agama
 *                      nama_agama:
 *                        type: string
 *                        description: nama agama
 *                  alamat:
 *                    type: string
 *                    description: alamat siswa
 *                  kelas:
 *                    type: object
 *                    properties:
 *                      id_kelas:
 *                        type: string
 *                        description: id kelas
 *                      nama_kelas:
 *                        type: string
 *                        description: nama kelas
 *                  foto_siswa:
 *                    type: string
 *                    description: foto siswa
 *                  createdAt:
 *                    type: string
 *                    description: waktu dibuat
 *                  updatedAt:
 *                    type: string
 *                    description: waktu diupdate
 *              status:
 *                type: string
 *                description: status
 *              createdAt:
 *                type: string
 *                description: waktu dibuat
 *              updatedAt:
 *                type: string
 *                description: waktu diupdate
 *    Get Riwayat Unauthorized:
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