import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('GET /api/buku/:bukuId', () => {
  it('should return 200 when get buku by id', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const result = await supertest(app)
      .get('/api/buku/961027a5-9316-40cb-9726-8592adeaa21f')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBeDefined();
  });

  it('should return 401 when get buku by id without token', async () => {
    const result = await supertest(app)
      .get('/api/buku/1');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when get buku by id with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');

    const result = await supertest(app)
      .get('/api/buku/1')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 404 when get buku by id with invalid id', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const result = await supertest(app)
      .get('/api/buku/999')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(404);
    expect(result.body.message).toBeDefined();
  });
});