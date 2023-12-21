import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';


describe('GET /api/buku', () => {
  it('should return 200 when get buku', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const result = await supertest(app)
      .get('/api/buku')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBeDefined();
  });

  it('should return 401 when get buku without token', async () => {
    const result = await supertest(app)
      .get('/api/buku');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when get buku with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');

    const result = await supertest(app)
      .get('/api/buku')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });
});