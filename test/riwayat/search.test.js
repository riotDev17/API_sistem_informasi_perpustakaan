import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('GET /api/riwayat/search', () => {
  it('should return 200 when search riwayat success with tanggal_pinjam', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .get('/api/riwayat/search?tanggal_pinjam=2023-12-19T00:00:00.000Z')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBeDefined();
    expect(result.body.data.length).toBeGreaterThanOrEqual(0);
  });

  it('should return 200 when search riwayat success with tanggal_kembali', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .get('/api/riwayat/search?tanggal_kembali=2023-12-19T00:00:00.000Z')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBeDefined();
    expect(result.body.data.length).toBeGreaterThanOrEqual(0);
  });

  it('should return 401 when search riwayat without token', async () => {
    const result = await supertest(app)
      .get('/api/riwayat/search')
      .query({
        keyword: 'admin',
      });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when search riwayat with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');
    const result = await supertest(app)
      .get('/api/riwayat/search')
      .set('Authorization', `Bearer ${token}`)
      .query({
        keyword: 'admin',
      });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 404 when search riwayat with tanggal_pinjam not found', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .get('/api/riwayat/search?tanggal_pinjam=2024-12-19T00:00:00.000Z')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(404);
    expect(result.body.message).toBeDefined();
  });
});