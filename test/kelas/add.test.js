import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('POST /api/kelas', () => {
  it('should return 200 when add kelas success', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .post('/api/kelas')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_kelas: 'kelas X B',
      });

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBeDefined();
    expect(result.body.data.nama_kelas).toBeDefined();
  });

  it('should return 400 when add kelas without nama_kelas', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .post('/api/kelas')
      .set('Authorization', `Bearer ${token}`)
      .send({});

    expect(result.status).toEqual(400);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when add kelas without token', async () => {
    const result = await supertest(app)
      .post('/api/kelas')
      .send({
        nama_kelas: 'kelas X A',
      });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when add kelas with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');
    const result = await supertest(app)
      .post('/api/kelas')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_kelas: 'kelas X B',
      });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 409 when add kelas with kelas exist', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .post('/api/kelas')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_kelas: 'kelas X B',
      });

    expect(result.status).toEqual(409);
    expect(result.body.message).toBeDefined();
  });
});