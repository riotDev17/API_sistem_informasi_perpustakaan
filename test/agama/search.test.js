import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('GET /api/agama/search', () => {
  it('should return 200 when search agama', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .get('/api/agama/search?nama_agama=islam')
      .set('Authorization', `Bearer ${token}`)

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBeDefined();
  });

  it('should return 401 when search agama without token', async () => {
    const result = await supertest(app)
      .get('/api/agama/search?nama_agama=islam')

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when search agama with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');
    const result = await supertest(app)
      .get('/api/agama/search?nama_agama=islam')
      .set('Authorization', `Bearer ${token}`)

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 404 when search agama not found', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .get('/api/agama/search?nama_agama=hindu')
      .set('Authorization', `Bearer ${token}`)

    expect(result.status).toEqual(404);
    expect(result.body.message).toBeDefined();
  });
});