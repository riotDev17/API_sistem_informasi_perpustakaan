import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('PUT /api/rak-buku/:rakBukuId', () => {
  it('should return 200 when update rak buku success', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .put('/api/rak-buku/d2970e9a-8d89-4b19-8c98-80726681fb81')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_rak_buku: 'Rak Buku 2',
      });

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBeDefined();
  });

  it('should return 401 when update rak buku without token', async () => {
    const result = await supertest(app)
      .put('/api/rak-buku/d2970e9a-8d89-4b19-8c98-80726681fb81')
      .send({
        nama_rak_buku: 'Rak Buku 2',
      });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when update rak buku with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');
    const result = await supertest(app)
      .put('/api/rak-buku/1')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_rak_buku: 'Rak Buku 1',
      });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 400 when update rak buku with invalid body', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .put('/api/rak-buku/d2970e9a-8d89-4b19-8c98-80726681fb81')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_rak_buku: 1,
      });

    expect(result.status).toEqual(400);
    expect(result.body.message).toBeDefined();
  });

  it('should return 404 when update rak buku with invalid id', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .put('/api/rak-buku/9999')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_rak_buku: 'Rak Buku 2',
      });

    expect(result.status).toEqual(404);
    expect(result.body.message).toBeDefined();
  });

  it('should return 409 when update rak buku with nama rak buku already exist', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .put('/api/rak-buku/d2970e9a-8d89-4b19-8c98-80726681fb81')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_rak_buku: 'Rak Buku 2',
      });

    expect(result.status).toEqual(409);
    expect(result.body.message).toBeDefined();
  });
});