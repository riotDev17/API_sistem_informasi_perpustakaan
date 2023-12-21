import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('POST /api/denda', () => {
  it('should return 200 when add denda', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .post('/api/denda')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nominal: 5000,
      });

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBeDefined();
    expect(result.body.data.nominal).toBeDefined();
  });

  it('should return 400 when add denda without nominal', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .post('/api/denda')
      .set('Authorization', `Bearer ${token}`)
      .send({});

    expect(result.status).toEqual(400);
    expect(result.body.message).toBeDefined();
  });

  it('should return 400 when add denda with data type string', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .post('/api/denda')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nominal: 'lima ribu',
      });

    expect(result.status).toEqual(400);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when add denda without token', async () => {
    const result = await supertest(app)
      .post('/api/denda')
      .send({
        nominal: 5000,
      });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when add denda with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');
    const result = await supertest(app)
      .post('/api/denda')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nominal: 5000,
      });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 409 when add denda with duplicate nominal', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .post('/api/denda')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nominal: 5000,
      });

    expect(result.status).toEqual(409);
    expect(result.body.message).toBeDefined();
  });
});