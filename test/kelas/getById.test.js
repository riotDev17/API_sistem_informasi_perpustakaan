import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('GET /api/kelas/:kelasId', () => {
  it('should return 200 when get kelas by id success', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .get('/api/kelas/beed3788-9672-4ccf-acf6-ac944fae4dbf')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBeDefined();
  });

  it('should return 401 when get kelas by id without token', async () => {
    const result = await supertest(app)
      .get('/api/kelas/beed3788-9672-4ccf-acf6-ac944fae4dbf');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when get kelas by id with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');
    const result = await supertest(app)
      .get('/api/kelas/beed3788-9672-4ccf-acf6-ac944fae4dbf')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });


  it('should return 404 when get kelas by id with id not found', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .get('/api/kelas/999')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(404);
    expect(result.body.message).toBeDefined();
  });
});