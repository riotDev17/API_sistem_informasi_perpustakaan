import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('PUT /api/agama/:agamaId', () => {
  it('should return 200 when update agama', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .put('/api/agama/7041a31a-eeac-4d4d-b23d-07ba8f1f3762')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_agama: 'Islam 2',
      });

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBeDefined();
    expect(result.body.data.nama_agama).toBeDefined();
  });

  it('should return 400 when update agama without nama_agama', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .put('/api/agama/7041a31a-eeac-4d4d-b23d-07ba8f1f3762')
      .set('Authorization', `Bearer ${token}`)
      .send({});

    expect(result.status).toEqual(400);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when update agama without token', async () => {
    const result = await supertest(app)
      .put('/api/agama/7041a31a-eeac-4d4d-b23d-07ba8f1f3762')
      .send({
        nama_agama: 'Islam',
      });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when update agama invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');
    const result = await supertest(app)
      .put('/api/agama/7041a31a-eeac-4d4d-b23d-07ba8f1f3762')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_agama: 'Islam 3',
      });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 404 when update agama not found', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .put('/api/agama/test')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_agama: 'Islam 4',
      });

    expect(result.status).toEqual(404);
    expect(result.body.message).toBeDefined();
  });

  it('should return 409 when update agama with nama_agama exist', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .put('/api/agama/7041a31a-eeac-4d4d-b23d-07ba8f1f3762')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_agama: 'Islam 2',
      });

    expect(result.status).toEqual(409);
    expect(result.body.message).toBeDefined();
  });
});