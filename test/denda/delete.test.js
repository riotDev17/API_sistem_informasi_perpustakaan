import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('DELETE /api/denda/:dendaId', () => {
  it('should return 200 when delete denda', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .delete('/api/denda/cfa651f2-c2c4-46b0-936a-f81f531c4116')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when delete denda without token', async () => {
    const result = await supertest(app)
      .delete('/api/denda/cfa651f2-c2c4-46b0-936a-f81f531c4116');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when delete denda with invalid token' , async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');
    const result = await supertest(app)
      .delete('/api/denda/cfa651f2-c2c4-46b0-936a-f81f531c4116')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  })

  it('should return 404 when delete denda with invalid id', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .delete('/api/denda/cfa651f2-c2c4-46b0-936a-f81f531c4116')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(404);
    expect(result.body.message).toBeDefined();
  })
})