import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';


describe('GET /api/buku/search', () => {
  it('should return 200 when search buku success', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const result = await supertest(app)
      .get('/api/buku/search?judul_buku=Bukukeren')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBeDefined();
  });

  it('should return 401 when search buku without token', async () => {
    const result = await supertest(app)
      .get('/api/buku/search?nama_buku=Bukukeren');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should retrun 401 when search buku with invalid token', async () => {
    const result = await supertest(app)
      .get('/api/buku/search?judul_buku=Bukukeren')
      .set('Authorization', `Bearer invalidtoken`);

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 404 when search buku with buku not found', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const result = await supertest(app)
      .get('/api/buku/search?judul_buku=asd')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(404);
    expect(result.body.message).toBeDefined();
  });
});