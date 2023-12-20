import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('POST /auth/admin/login', () => {
  it('should return 200 when login admin', async () => {
    const result = await supertest(app).post('/auth/admin/login').send({
      username: 'admin',
      password: 'admin123',
    });

    expect(result.status).toEqual(200);
    expect(result.body.data.token).toBeDefined();
    expect(result.body.message).toBeDefined();
  });

  it('should return 400 when login admin with empty username', async () => {
    const result = await supertest(app).post('/auth/admin/login').send({
      username: '',
      password: 'admin123',
    });

    expect(result.status).toEqual(400);
    expect(result.body.message).toBeDefined();
  });

  it('should return 400 when login admin with empty password', async () => {
    const result = await supertest(app).post('/auth/admin/login').send({
      username: 'admin',
      password: '',
    });

    expect(result.status).toEqual(400);
    expect(result.body.message).toBeDefined();
  });

  it('should return 400 when login admin with empty username and password', async () => {
    const result = await supertest(app).post('/auth/admin/login').send({
      username: '',
      password: '',
    });

    expect(result.status).toEqual(400);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when username is wrong', async () => {
    const result = await supertest(app).post('/auth/admin/login').send({
      username: 'admin123',
      password: 'admin123',
    });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when password is wrong', async () => {
    const result = await supertest(app).post('/auth/admin/login').send({
      username: 'admin',
      password: 'admin1233',
    });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });
});