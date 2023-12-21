import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('DELETE /api/agama/:agamaId', () => {
  it('should return 200 when delete agama', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .delete('/api/agama/3dc95ff5-4351-4b50-9535-ecdac2c39e6c')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when delete agama without token', async () => {
    const result = await supertest(app)
      .delete('/api/agama/7041a31a-eeac-4d4d-b23d-07ba8f1f3762');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when delete agama invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');
    const result = await supertest(app)
      .delete('/api/agama/7041a31a-eeac-4d4d-b23d-07ba8f1f3762')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 404 when delete agama not found', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .delete('/api/agama/test')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(404);
    expect(result.body.message).toBeDefined();
  });
});