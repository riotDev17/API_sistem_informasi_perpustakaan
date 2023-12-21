import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('GET /api/siswa/search', () => {
  it('should return 200 when search siswa by nama_siswa success', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const result = await supertest(app)
      .get('/api/siswa/search?nama_siswa=Annisa Cahaya Utami')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBeDefined();
  });

  it('should return 200 when search siswa by no_anggota success', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const result = await supertest(app)
      .get('/api/siswa/search?no_anggota=937743622')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBeDefined();
  });

  it('should return 401 when search siswa without token', async () => {
    const result = await supertest(app)
      .get('/api/siswa/search?nama_siswa=Annisa Cahaya Utami');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when search siswa with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');

    const result = await supertest(app)
      .get('/api/siswa/search?nama_siswa=Annisa Cahaya Utami')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });
});