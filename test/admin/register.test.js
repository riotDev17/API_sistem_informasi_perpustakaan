import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('POST /auth/admin/register', () => {
  it('should return 200 when register admin', async () => {
    const result = await supertest(app).post('/auth/admin/register').send({
      username: 'admin',
      password: 'admin123',
    });

    expect(result.status).toEqual(200);
    expect(result.body.data.id_admin).toBeDefined();
    expect(result.body.data.username).toEqual('admin');
    expect(result.body.data.foto_admin).toBeNull();
    expect(result.body.data.createdAt).toBeDefined();
    expect(result.body.data.updatedAt).toBeDefined();
    expect(result.body.message).toBeDefined();
  });

  it('should return 400 when register admin with empty username', async () => {
    const result = await supertest(app).post('/auth/admin/register').send({
      username: '',
      password: 'admin123',
    });

    expect(result.status).toEqual(400);
    expect(result.body.message).toBeDefined();
  });

  it('should return 400 when register admin with empty password', async () => {
    const result = await supertest(app).post('/auth/admin/register').send({
      username: 'admin',
      password: '',
    });

    expect(result.status).toEqual(400);
    expect(result.body.message).toBeDefined();
  });

  it('should return 400 when register admin with empty username and password', async () => {
    const result = await supertest(app).post('/auth/admin/register').send({
      username: '',
      password: '',
    });

    expect(result.status).toEqual(400);
    expect(result.body.message).toBeDefined();
  });

  it('should return 400 when register admin with password less 8 character', async () => {
    const result = await supertest(app).post('/auth/admin/register').send({
      username: 'admin',
      password: 'admin12',
    });

    expect(result.status).toEqual(400);
    expect(result.body.message).toBeDefined();
  });

  it('should return 409 when register with username already exist', async () => {
    const result = await supertest(app).post('/auth/admin/register').send({
      username: 'admin',
      password: 'admin123',
    });

    expect(result.status).toEqual(409);
    expect(result.body.message).toBeDefined();
  });
});