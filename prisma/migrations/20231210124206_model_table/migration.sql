-- CreateTable
CREATE TABLE "admin" (
    "id_admin" TEXT NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "foto_admin" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id_admin")
);

-- CreateTable
CREATE TABLE "agama" (
    "id_agama" TEXT NOT NULL,
    "nama_agama" VARCHAR(25) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "agama_pkey" PRIMARY KEY ("id_agama")
);

-- CreateTable
CREATE TABLE "kelas" (
    "id_kelas" TEXT NOT NULL,
    "nama_kelas" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "kelas_pkey" PRIMARY KEY ("id_kelas")
);

-- CreateTable
CREATE TABLE "siswa" (
    "id_siswa" TEXT NOT NULL,
    "no_anggota" INTEGER NOT NULL,
    "nama_siswa" VARCHAR(50) NOT NULL,
    "nis" INTEGER NOT NULL,
    "nisn" INTEGER NOT NULL,
    "tanggal_lahir" DATE NOT NULL,
    "tempat_lahir" TEXT NOT NULL,
    "jenis_kelamin" VARCHAR(15) NOT NULL,
    "id_agama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "id_kelas" TEXT NOT NULL,
    "foto_siswa" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "siswa_pkey" PRIMARY KEY ("id_siswa")
);

-- CreateTable
CREATE TABLE "rak_buku" (
    "id_rak_buku" TEXT NOT NULL,
    "nama_rak_buku" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rak_buku_pkey" PRIMARY KEY ("id_rak_buku")
);

-- CreateTable
CREATE TABLE "buku" (
    "id_buku" TEXT NOT NULL,
    "judul_buku" VARCHAR(50) NOT NULL,
    "pengarang" VARCHAR(50) NOT NULL,
    "penerbit" VARCHAR(50) NOT NULL,
    "tahun_terbit" INTEGER NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "stok_buku" INTEGER NOT NULL,
    "foto_buku" TEXT NOT NULL,
    "id_rak_buku" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "buku_pkey" PRIMARY KEY ("id_buku")
);

-- CreateTable
CREATE TABLE "denda" (
    "id_denda" TEXT NOT NULL,
    "nominal" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "denda_pkey" PRIMARY KEY ("id_denda")
);

-- CreateTable
CREATE TABLE "peminjaman" (
    "id_peminjaman" TEXT NOT NULL,
    "id_siswa" TEXT NOT NULL,
    "id_buku" TEXT NOT NULL,
    "tanggal_pinjam" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tanggal_kembali" DATE NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "peminjaman_pkey" PRIMARY KEY ("id_peminjaman")
);

-- CreateTable
CREATE TABLE "riwayat" (
    "id_riwayat" TEXT NOT NULL,
    "id_siswa" TEXT NOT NULL,
    "id_buku" TEXT NOT NULL,
    "id_denda" TEXT,
    "tanggal_pinjam" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tanggal_kembali" DATE NOT NULL,
    "status" VARCHAR(25) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "riwayat_pkey" PRIMARY KEY ("id_riwayat")
);

-- AddForeignKey
ALTER TABLE "siswa" ADD CONSTRAINT "siswa_id_agama_fkey" FOREIGN KEY ("id_agama") REFERENCES "agama"("id_agama") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "siswa" ADD CONSTRAINT "siswa_id_kelas_fkey" FOREIGN KEY ("id_kelas") REFERENCES "kelas"("id_kelas") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "buku" ADD CONSTRAINT "buku_id_rak_buku_fkey" FOREIGN KEY ("id_rak_buku") REFERENCES "rak_buku"("id_rak_buku") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "peminjaman" ADD CONSTRAINT "peminjaman_id_siswa_fkey" FOREIGN KEY ("id_siswa") REFERENCES "siswa"("id_siswa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "peminjaman" ADD CONSTRAINT "peminjaman_id_buku_fkey" FOREIGN KEY ("id_buku") REFERENCES "buku"("id_buku") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "riwayat" ADD CONSTRAINT "riwayat_id_siswa_fkey" FOREIGN KEY ("id_siswa") REFERENCES "siswa"("id_siswa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "riwayat" ADD CONSTRAINT "riwayat_id_buku_fkey" FOREIGN KEY ("id_buku") REFERENCES "buku"("id_buku") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "riwayat" ADD CONSTRAINT "riwayat_id_denda_fkey" FOREIGN KEY ("id_denda") REFERENCES "denda"("id_denda") ON DELETE SET NULL ON UPDATE CASCADE;
