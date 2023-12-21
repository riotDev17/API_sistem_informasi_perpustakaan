import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('GET /api/kelas/search', () => {
  it('should return 200 when search kelas success', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .get('/api/kelas/search?nama_kelas=kelas X A')
      .set('Authorization', `Bearer ${token}`)

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBeDefined();
  });

  it('should return 401 when search kelas without token', async () => {
    const result = await supertest(app)
      .get('/api/kelas/search')
      .query({
        nama_kelas: 'kelas X A',
      });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when search kelas with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');
    const result = await supertest(app)
      .get('/api/kelas/search')
      .set('Authorization', `Bearer ${token}`)
      .query({
        nama_kelas: 'kelas X A',
      });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should retrun 404 when search kelas with nama_kelas not found', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .get('/api/kelas/search')
      .set('Authorization', `Bearer ${token}`)
      .query({
        nama_kelas: 'kelas X Z',
      });

    expect(result.status).toEqual(404);
    expect(result.body.message).toBeDefined();
  })
})