import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('POST /api/siswa', () => {
  it('should return 200 when add siswa success', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const formData = {
      nama_siswa: 'Siswa 2',
      nis: 120,
      nisn: 12341,
      tanggal_lahir: '17 April 2029',
      tempat_lahir: 'Jakarta',
      jenis_kelamin: 'Laki-laki',
      id_agama: '7041a31a-eeac-4d4d-b23d-07ba8f1f3762',
      alamat: 'Jl. Siswa 1',
      id_kelas: '710dca99-de8e-479d-9e6f-8979f88287f0',
    };

    const result = await supertest(app)
      .post('/api/siswa')
      .set('Authorization', `Bearer ${token}`)
      .field(formData)
      .attach('foto_siswa', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBeDefined();
    expect(result.body.data.no_anggota).toBeDefined();
  });

  it('should return 400 when add siswa without nama_siswa', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const formData = {
      nis: 120,
      nisn: 12341,
      tanggal_lahir: '17 April 2029',
      tempat_lahir: 'Jakarta',
      jenis_kelamin: 'Laki-laki',
      id_agama: '7041a31a-eeac-4d4d-b23d-07ba8f1f3762',
      alamat: 'Jl. Siswa 1',
      id_kelas: '710dca99-de8e-479d-9e6f-8979f88287f0',
    };

    const result = await supertest(app)
      .post('/api/siswa')
      .set('Authorization', `Bearer ${token}`)
      .field(formData)
      .attach('foto_siswa', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(400);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when add siswa without token', async () => {
    const formData = {
      nama_siswa: 'Siswa 2',
      nis: 120,
      nisn: 12341,
      tanggal_lahir: '17 April 2029',
      tempat_lahir: 'Jakarta',
      jenis_kelamin: 'Laki-laki',
      id_agama: '7041a31a-eeac-4d4d-b23d-07ba8f1f3762',
      alamat: 'Jl. Siswa 1',
      id_kelas: '710dca99-de8e-479d-9e6f-8979f88287f0',
    };

    const result = await supertest(app)
      .post('/api/siswa')
      .field(formData)
      .attach('foto_siswa', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when add siswa with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');

    const formData = {
      nama_siswa: 'Siswa 2',
      nis: 120,
      nisn: 12341,
      tanggal_lahir: '17 April 2029',
      tempat_lahir: 'Jakarta',
      jenis_kelamin: 'Laki-laki',
      id_agama: '7041a31a-eeac-4d4d-b23d-07ba8f1f3762',
      alamat: 'Jl. Siswa 1',
      id_kelas: '710dca99-de8e-479d-9e6f-8979f88287f0',
    };

    const result = await supertest(app)
      .post('/api/siswa')
      .set('Authorization', `Bearer ${token}`)
      .field(formData)
      .attach('foto_siswa', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 409 when add siswa with nama_siswa already exist', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const formData = {
      nama_siswa: 'Siswa 2',
      nis: 120,
      nisn: 12341,
      tanggal_lahir: '17 April 2029',
      tempat_lahir: 'Jakarta',
      jenis_kelamin: 'Laki-laki',
      id_agama: '7041a31a-eeac-4d4d-b23d-07ba8f1f3762',
      alamat: 'Jl. Siswa 1',
      id_kelas: '710dca99-de8e-479d-9e6f-8979f88287f0',
    };

    const result = await supertest(app)
      .post('/api/siswa')
      .set('Authorization', `Bearer ${token}`)
      .field(formData)
      .attach('foto_siswa', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(409);
    expect(result.body.message).toBeDefined();
  });
});