// ====== GET SISWA ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Get Siswa Success:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          description: Status
 *        message:
 *          type: string
 *          description: Message
 *        data:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              id_siswa:
 *                type: string
 *                description: ID Siswa
 *              no_anggota:
 *                type: string
 *                description: No Anggota
 *              nama_siswa:
 *                type: string
 *                description: Nama Siswa
 *              nis:
 *                type: string
 *                description: NIS
 *              nisn:
 *                type: string
 *                description: NISN
 *              tanggal_lahir:
 *                type: string
 *                description: Tanggal Lahir
 *              tempat_lahir:
 *                type: string
 *                description: Tempat Lahir
 *              jenis_kelamin:
 *                type: string
 *                description: Jenis Kelamin
 *              agama:
 *                type: object
 *                properties:
 *                  id_agama:
 *                    type: string
 *                    description: ID Agama
 *                  nama_agama:
 *                    type: string
 *                    description: Nama Agama
 *              alamat:
 *                type: string
 *                description: Alamat
 *              kelas:
 *                type: object
 *                properties:
 *                  id_kelas:
 *                    type: string
 *                    description: ID Kelas
 *                  nama_kelas:
 *                    type: string
 *                    description: Nama Kelas
 *              foto_siswa:
 *                type: string
 *                description: Foto Siswa
 *              createdAt:
 *                type: string
 *                description: Created At
 *              updatedAt:
 *                type: string
 *                description: Updated At
 *    Get Siswa Unauthorized:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Unauthorized
 *          description: Status
 *        message:
 *          type: string
 *          default: Message Unauthorized
 *          description: Message
 *
 *
 * */

// ====== SEARCH SISWA ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Search Siswa:
 *      type: object
 *      required:
 *        - nama_siswa
 *        - no_anggota
 *      properties:
 *        nama_siswa:
 *          type: string
 *          description: Nama Siswa
 *        no_anggota:
 *          type: string
 *          description: No Anggota
 *    Search Siswa Success:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          description: Status
 *        message:
 *          type: string
 *          description: Message
 *        data:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              id_siswa:
 *                type: string
 *                description: ID Siswa
 *              no_anggota:
 *                type: string
 *                description: No Anggota
 *              nama_siswa:
 *                type: string
 *                description: Nama Siswa
 *              nis:
 *                type: string
 *                description: NIS
 *              nisn:
 *                type: string
 *                description: NISN
 *              tanggal_lahir:
 *                type: string
 *                description: Tanggal Lahir
 *              tempat_lahir:
 *                type: string
 *                description: Tempat Lahir
 *              jenis_kelamin:
 *                type: string
 *                description: Jenis Kelamin
 *              agama:
 *                type: object
 *                properties:
 *                  id_agama:
 *                    type: string
 *                    description: ID Agama
 *                  nama_agama:
 *                    type: string
 *                    description: Nama Agama
 *              alamat:
 *                type: string
 *                description: Alamat
 *              kelas:
 *                type: object
 *                properties:
 *                  id_kelas:
 *                    type: string
 *                    description: ID Kelas
 *                  nama_kelas:
 *                    type: string
 *                    description: Nama Kelas
 *              foto_siswa:
 *                type: string
 *                description: Foto Siswa
 *              createdAt:
 *                type: string
 *                description: Created At
 *              updatedAt:
 *                type: string
 *                description: Updated At
 *
 * */

// ====== ADD SISWA ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Add Siswa:
 *      type: object
 *      required:
 *        - nama_siswa
 *        - nis
 *        - nisn
 *        - tanggal_lahir
 *        - tempat_lahir
 *        - jenis_kelamin
 *        - id_agama
 *        - alamat
 *        - id_kelas
 *        - foto_siswa
 *      properties:
 *        nama_siswa:
 *          type: string
 *          description: Nama Siswa
 *        nis:
 *          type: string
 *          description: NIS
 *        nisn:
 *          type: string
 *          description: NISN
 *        tanggal_lahir:
 *          type: string
 *          description: Tanggal Lahir
 *        tempat_lahir:
 *          type: string
 *          description: Tempat Lahir
 *        jenis_kelamin:
 *          type: string
 *          description: Jenis Kelamin
 *        id_agama:
 *          type: string
 *          description: ID Agama
 *        alamat:
 *          type: string
 *          description: Alamat
 *        id_kelas:
 *          type: string
 *          description: ID Kelas
 *        foto_siswa:
 *          type: file
 *          description: Foto Siswa
 *    Add Siswa Success:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          description: Status
 *        message:
 *          type: string
 *          description: Message
 *        data:
 *          type: object
 *          properties:
 *            id_siswa:
 *              type: string
 *              description: ID Siswa
 *            no_anggota:
 *              type: string
 *              description: No Anggota
 *            nama_siswa:
 *              type: string
 *              description: Nama Siswa
 *            nis:
 *              type: string
 *              description: NIS
 *            nisn:
 *              type: string
 *              description: NISN
 *            tanggal_lahir:
 *              type: string
 *              description: Tanggal Lahir
 *            tempat_lahir:
 *              type: string
 *              description: Tempat Lahir
 *            jenis_kelamin:
 *              type: string
 *              description: Jenis Kelamin
 *            agama:
 *              type: object
 *              properties:
 *                id_agama:
 *                  type: string
 *                  description: ID Agama
 *                nama_agama:
 *                  type: string
 *                  description: Nama Agama
 *            alamat:
 *              type: string
 *              description: Alamat
 *            kelas:
 *              type: object
 *              properties:
 *                id_kelas:
 *                  type: string
 *                  description: ID Kelas
 *                nama_kelas:
 *                  type: string
 *                  description: Nama Kelas
 *            foto_siswa:
 *              type: string
 *              description: Foto Siswa
 *            createdAt:
 *              type: string
 *              description: Created At
 *            updatedAt:
 *              type: string
 *              description: Updated At
 *    Add Siswa Bad Request:
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
 *    Add Siswa Unauthorized:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Unauthorized
 *          description: Status
 *        message:
 *          type: string
 *          default: Message Unauthorized
 *          description: Message
 *    Add Siswa Conflict:
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
 * */