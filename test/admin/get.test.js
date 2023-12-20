import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('GET /api/admin', () => {
  it('should return 200 when get admin', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app).get('/api/admin').set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(200);
    expect(result.body.data).toBeDefined();
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when get admin without token', async () => {
    const result = await supertest(app).get('/api/admin');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });


  it('Should return 401 when get admin with invalid token', async () => {
    const result = await supertest(app).get('/api/admin').set('Authorization', `Bearer ${'invalid token'}`);

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });
});