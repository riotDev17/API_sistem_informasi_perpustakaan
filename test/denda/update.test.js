import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('PUT /api/denda/:dendaId', () => {
  it('should return 200 when update denda', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .put('/api/denda/26ecce00-bf52-4277-ae16-2c991d9a300a')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nominal: 13000,
      });

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBeDefined();
    expect(result.body.data.nominal).toEqual(13000);
  });

  it('should return 401 when update denda without token', async () => {
    const result = await supertest(app)
      .put('/api/denda/26ecce00-bf52-4277-ae16-2c991d9a300a')
      .send({
        nominal: 10000,
      });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when update denda with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');
    const result = await supertest(app)
      .put('/api/denda/26ecce00-bf52-4277-ae16-2c991d9a300a')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nominal: 10000,
      });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 404 when update denda not found', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .put('/api/denda/1')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nominal: 10000,
      });

    expect(result.status).toEqual(404);
    expect(result.body.message).toBeDefined();
  });

  it('should return 409 when update denda with nominal exist', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .put('/api/denda/26ecce00-bf52-4277-ae16-2c991d9a300a')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nominal: 13000,
      });

    expect(result.status).toEqual(409);
    expect(result.body.message).toBeDefined();
  });
});