import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('DELETE /api/rak-buku/:rakBukuId', () => {
  it('should return 200 when delete rak buku success', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .delete('/api/rak-buku/20199e6d-d07c-403f-9d68-d8772a5e4822')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when delete rak buku without token', async () => {
    const result = await supertest(app)
      .delete('/api/rak-buku/d2970e9a-8d89-4b19-8c98-80726681fb81');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when delete rak buku with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');
    const result = await supertest(app)
      .delete('/api/rak-buku/d2970e9a-8d89-4b19-8c98-80726681fb81')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 404 when delete rak buku with rak buku id not found', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .delete('/api/rak-buku/1')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(404);
    expect(result.body.message).toBeDefined();
  });
});