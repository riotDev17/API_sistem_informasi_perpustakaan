import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('POST /api/agama', () => {
  it('should return 200 when add agama', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .post('/api/agama')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_agama: 'Islam',
      });

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBeDefined();
    expect(result.body.data.nama_agama).toBeDefined();
  });

  it('should return 400 when add agama without nama_agama', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .post('/api/agama')
      .set('Authorization', `Bearer ${token}`)
      .send({});

    expect(result.status).toEqual(400);
    expect(result.body.message).toBeDefined();
  })

  it('should return 401 when add agama without token', async () => {
    const result = await supertest(app)
      .post('/api/agama')
      .send({
        nama_agama: 'Islam',
      });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });


  it('should return 401 when add agama with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');
    const result = await supertest(app)
      .post('/api/agama')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_agama: 'Islam',
      });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 409 when add agama with nama_agama exist', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .post('/api/agama')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_agama: 'Islam',
      });

    expect(result.status).toEqual(409);
    expect(result.body.message).toBeDefined();
  })
});