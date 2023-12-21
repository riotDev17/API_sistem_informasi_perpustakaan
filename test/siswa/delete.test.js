import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('DELETE /api/siswa/:siswaId', () => {
  it('should return 200 when delete siswa success', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const result = await supertest(app)
      .delete('/api/siswa/67dad486-0c2e-47fb-8728-a4a35e4331db')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when delete siswa without token', async () => {
    const result = await supertest(app)
      .delete('/api/siswa/1');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when delete siswa with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');

    const result = await supertest(app)
      .delete('/api/siswa/1')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 404 when delete siswa with siswaId not found', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const result = await supertest(app)
      .delete('/api/siswa/100')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(404);
    expect(result.body.message).toBeDefined();
  });
});