import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('DELETE /api/kelas/:kelasId', () => {
  it('should return 200 when delete kelas success', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .delete('/api/kelas/4d4cc8a0-6ff3-4b37-868a-35108fc1ab0f')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when delete kelas without token', async () => {
    const result = await supertest(app)
      .delete('/api/kelas/4d4cc8a0-6ff3-4b37-868a-35108fc1ab0f');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when delete kelas with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');
    const result = await supertest(app)
      .delete('/api/kelas/4d4cc8a0-6ff3-4b37-868a-35108fc1ab0f')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 404 when delete kelas with id not found', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .delete('/api/kelas/999')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(404);
    expect(result.body.message).toBeDefined();
  })
});