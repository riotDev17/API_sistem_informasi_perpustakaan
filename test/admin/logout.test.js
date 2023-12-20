import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('DELETE /api/admin/logout', () => {
  it('Should return 200 when logout admin', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app).delete('/api/admin/logout').set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
  });

  it('Should return 401 when logout admin without token', async () => {
    const result = await supertest(app).delete('/api/admin/logout');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('Should return 401 when logout admin with invalid token', async () => {
    const result = await supertest(app).delete('/api/admin/logout').set('Authorization', `Bearer ${'invalid token'}`);

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });
});