import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('POST /api/rak-buku', () => {
  it('should return 200 when add rak buku success', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .post('/api/rak-buku')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_rak_buku: 'rak 12',
      });

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBeDefined();
    expect(result.body.data.nama_rak_buku).toBeDefined();
  });

  it('should return 400 when add rak buku without nama_rak_buku', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .post('/api/rak-buku')
      .set('Authorization', `Bearer ${token}`)
      .send({});

    expect(result.status).toEqual(400);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when add rak buku without token', async () => {
    const result = await supertest(app)
      .post('/api/rak-buku')
      .send({
        nama_rak: 'rak 1',
      });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when add rak buku with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');
    const result = await supertest(app)
      .post('/api/rak-buku')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_rak: 'rak 1',
      });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 409 when add rak buku with nama_rak_buku already exist', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .post('/api/rak-buku')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_rak_buku: 'rak 12',
      });

    expect(result.status).toEqual(409);
    expect(result.body.message).toBeDefined();
  });
});